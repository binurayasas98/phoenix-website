import { animate } from 'motion';

// Card rails (see Rail.astro). Native scrolling does the work on touch and trackpads; this adds the
// progress bar, previous and next, mouse drag with a short glide, and arrow keys.

const EASE = [0.22, 1, 0.36, 1] as const;
// The easing starts at 1 / 0.22 times the average speed, so a glide can pick up the flick speed.
const EASE_START_SLOPE = 1 / 0.22;
const PAGE_DURATION = 0.65;
const DRAG_THRESHOLD = 6;

type Controls = { stop: () => void };

function setup(root: HTMLElement): void {
  const rail = root.querySelector<HTMLElement>('[data-rail]');
  const list = root.querySelector<HTMLElement>('[data-rail-list]');
  const thumb = root.querySelector<HTMLElement>('[data-rail-thumb]');
  const prev = root.querySelector<HTMLButtonElement>('[data-rail-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-rail-next]');
  if (!rail || !list || !thumb || !prev || !next) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const gridQuery = root.dataset.gridFrom ? window.matchMedia(`(min-width: ${root.dataset.gridFrom})`) : null;
  const isRail = () => !gridQuery?.matches;

  const items = () => [...list.children] as HTMLElement[];
  const maxScroll = () => Math.max(0, rail.scrollWidth - rail.clientWidth);
  const clamp = (x: number) => Math.min(Math.max(x, 0), maxScroll());

  // The scroll position that puts each card on the page grid (clamped at the end of the rail).
  const positions = () => {
    const all = items();
    const start = all[0]?.offsetLeft ?? 0;
    return all.map((el) => clamp(el.offsetLeft - start));
  };

  const nearestIndex = (x: number) => {
    const pos = positions();
    let best = 0;
    pos.forEach((p, i) => {
      if (Math.abs(p - x) < Math.abs(pos[best] - x)) best = i;
    });
    return best;
  };

  // The number of cards that fit fully in view: one "page".
  const pageSize = () => {
    const [first, second] = items();
    if (!first) return 1;
    const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
    const gap = step - first.offsetWidth;
    return Math.max(1, Math.floor((rail.clientWidth - first.offsetLeft + gap + 1) / step));
  };

  // Scrolling animation. Snap is off while it runs so every frame lands exactly where it should.
  let anim: Controls | null = null;

  const releaseSnap = () => {
    rail.style.scrollSnapType = '';
  };

  const stopAnim = () => {
    if (!anim) return;
    anim.stop();
    anim = null;
    releaseSnap();
  };

  const scrollToX = (target: number, duration = PAGE_DURATION) => {
    const to = Math.round(clamp(target));
    stopAnim();
    if (reduce.matches || Math.abs(to - rail.scrollLeft) < 1) {
      rail.scrollLeft = to;
      releaseSnap();
      return;
    }
    rail.style.scrollSnapType = 'none';
    const controls = animate(rail.scrollLeft, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        rail.scrollLeft = v;
      },
      onComplete: () => {
        rail.scrollLeft = to;
        anim = null;
        releaseSnap();
      },
    });
    anim = controls;
  };

  const goTo = (index: number) => {
    const pos = positions();
    if (!pos.length) return;
    scrollToX(pos[Math.min(Math.max(index, 0), pos.length - 1)]);
  };

  // Progress bar and button states, once per frame at most.
  let frame = 0;
  const update = () => {
    frame = 0;
    const max = maxScroll();
    const share = rail.scrollWidth > 0 ? rail.clientWidth / rail.scrollWidth : 1;
    const progress = max > 0 ? rail.scrollLeft / max : 0;
    // translateX is relative to the thumb's own width.
    thumb.style.transform = `translateX(${(progress * (1 / share - 1) * 100).toFixed(3)}%)`;
    prev.setAttribute('aria-disabled', String(rail.scrollLeft <= 1));
    next.setAttribute('aria-disabled', String(rail.scrollLeft >= max - 1));
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  // Sizes only change on resize, never while scrolling.
  const measure = () => {
    const railMode = isRail();
    if (railMode) {
      rail.setAttribute('role', 'region');
      rail.setAttribute('aria-roledescription', 'carousel');
      rail.tabIndex = 0;
    } else {
      rail.removeAttribute('role');
      rail.removeAttribute('aria-roledescription');
      rail.removeAttribute('tabindex');
    }
    const share = rail.scrollWidth > 0 ? Math.min(1, rail.clientWidth / rail.scrollWidth) : 1;
    thumb.style.width = `${(share * 100).toFixed(3)}%`;
    root.toggleAttribute('data-static', !railMode || maxScroll() <= 1);
    update();
  };

  prev.addEventListener('click', () => {
    if (prev.getAttribute('aria-disabled') === 'true') return;
    goTo(nearestIndex(rail.scrollLeft) - pageSize());
  });
  next.addEventListener('click', () => {
    if (next.getAttribute('aria-disabled') === 'true') return;
    goTo(nearestIndex(rail.scrollLeft) + pageSize());
  });

  rail.addEventListener('scroll', schedule, { passive: true });
  // A finger or trackpad takes over from a running animation.
  rail.addEventListener('wheel', stopAnim, { passive: true });
  rail.addEventListener('touchstart', stopAnim, { passive: true });

  // Keyboard: Left and Right move one card, Home and End go to either end.
  rail.addEventListener('keydown', (e) => {
    if (!isRail() || e.altKey || e.ctrlKey || e.metaKey) return;
    const current = nearestIndex(rail.scrollLeft);
    const moves: Record<string, number> = {
      ArrowRight: current + 1,
      ArrowLeft: current - 1,
      Home: 0,
      End: items().length - 1,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    goTo(moves[e.key]);
  });

  // Tabbing to a card brings the whole card into view on the page grid.
  rail.addEventListener('focusin', (e) => {
    if (!isRail()) return;
    const item = items().find((el) => el.contains(e.target as Node));
    if (!item) return;
    const r = rail.getBoundingClientRect();
    const c = item.getBoundingClientRect();
    const start = items()[0]?.offsetLeft ?? 0;
    if (c.left < r.left + start - 1 || c.right > r.right + 1) goTo(items().indexOf(item));
  });

  // Desktop mouse drag. On release the flick speed carries into a short glide that settles on a card.
  let drag: { id: number; startX: number; startLeft: number; moved: boolean; samples: [number, number][] } | null = null;
  let suppressClick = false;

  const links = () => rail.querySelectorAll<HTMLElement>('a, img');
  links().forEach((el) => el.setAttribute('draggable', 'false'));

  rail.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !isRail()) return;
    stopAnim();
    drag = { id: e.pointerId, startX: e.clientX, startLeft: rail.scrollLeft, moved: false, samples: [[e.timeStamp, e.clientX]] };
  });

  rail.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.startX;
    if (!drag.moved) {
      if (Math.abs(dx) <= DRAG_THRESHOLD) return;
      drag.moved = true;
      rail.setPointerCapture(e.pointerId);
      rail.style.scrollSnapType = 'none';
      root.classList.add('is-dragging');
    }
    rail.scrollLeft = drag.startLeft - dx;
    drag.samples.push([e.timeStamp, e.clientX]);
    // Keep the last 100ms for the release speed.
    while (drag.samples.length > 2 && e.timeStamp - drag.samples[0][0] > 100) drag.samples.shift();
  });

  const endDrag = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag;
    drag = null;
    if (!d.moved) return;
    root.classList.remove('is-dragging');
    if (rail.hasPointerCapture(e.pointerId)) rail.releasePointerCapture(e.pointerId);
    suppressClick = true;
    window.setTimeout(() => (suppressClick = false), 100);

    // Release speed in px per ms (positive = scrolling forward). Zero if the mouse was held still.
    const [t0, x0] = d.samples[0];
    const [t1, x1] = d.samples[d.samples.length - 1];
    const fresh = e.timeStamp - t1 < 60 && t1 > t0;
    const velocity = fresh ? -(x1 - x0) / (t1 - t0) : 0;

    const from = rail.scrollLeft;
    const target = positions()[nearestIndex(from + velocity * 300)];
    const distance = Math.abs(target - from);
    const sameWay = velocity !== 0 && Math.sign(target - from) === Math.sign(velocity);
    // Match the glide's starting speed to the flick, within limits.
    const ms = sameWay ? (EASE_START_SLOPE * distance) / Math.abs(velocity) : 450;
    scrollToX(target, Math.min(Math.max(ms, 300), 900) / 1000);
  };

  rail.addEventListener('pointerup', endDrag);
  rail.addEventListener('pointercancel', endDrag);

  // A drag must not open the card link.
  rail.addEventListener(
    'click',
    (e) => {
      if (!suppressClick) return;
      suppressClick = false;
      e.preventDefault();
      e.stopPropagation();
    },
    true,
  );

  new ResizeObserver(measure).observe(rail);
  gridQuery?.addEventListener('change', measure);
  measure();
}

export function initRails(): void {
  document.querySelectorAll<HTMLElement>('[data-rail-root]').forEach((root) => {
    if (root.dataset.railReady) return;
    root.dataset.railReady = 'true';
    setup(root);
  });
}
