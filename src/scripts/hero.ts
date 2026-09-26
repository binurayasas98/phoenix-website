import { animate, scroll, stagger } from 'motion';

const ease = [0.22, 1, 0.36, 1] as const;

/** Groups the h1 words by their visual line so each line can reveal in turn. */
function wordsByLine(words: HTMLElement[]): HTMLElement[][] {
  const lines = new Map<number, HTMLElement[]>();
  for (const word of words) {
    const top = Math.round((word.parentElement ?? word).getBoundingClientRect().top);
    const line = lines.get(top) ?? [];
    line.push(word);
    lines.set(top, line);
  }
  return [...lines.entries()].sort((a, b) => a[0] - b[0]).map(([, w]) => w);
}

export function runHero(hero: HTMLElement): void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  hero.classList.add('is-animated');

  const img = hero.querySelector<HTMLElement>('[data-hero-img]');
  const media = hero.querySelector<HTMLElement>('[data-hero-media]');
  const dim = hero.querySelector<HTMLElement>('[data-hero-dim]');
  const ropeLine = hero.querySelector<HTMLElement>('.hero-rope .rope-line');
  const ropeDot = hero.querySelector<HTMLElement>('.hero-rope .rope-dot');
  const words = [...hero.querySelectorAll<HTMLElement>('[data-hero-word]')];
  const fades = [...hero.querySelectorAll<HTMLElement>('[data-hero-fade]')];
  const announcement = fades.find((el) => el.hasAttribute('data-announcement'));
  const afterTitle = fades.filter((el) => el !== announcement);

  if (reduce) {
    // Opacity changes only.
    const targets = [...words, ...fades, ropeLine, ropeDot].filter(Boolean) as HTMLElement[];
    animate(targets, { opacity: [0, 1] }, { duration: 0.6, ease });
    if (dim) scroll(animate(dim, { opacity: [0, 0.35] }, { ease: 'linear' }), { target: hero, offset: ['start start', 'end start'] });
    return;
  }

  // The photo settles from 1.1 to 1 over 1.8s.
  if (img) animate(img, { transform: ['scale(1.1)', 'scale(1)'] }, { duration: 1.8, ease });

  // A white rope drops from the header to above the h1 in 700ms.
  if (ropeLine) animate(ropeLine, { transform: ['scaleY(0)', 'scaleY(1)'] }, { duration: 0.7, delay: 0.1, ease });
  if (ropeDot) {
    animate(
      ropeDot,
      { opacity: [0, 1], transform: ['translateY(-12px)', 'translateY(0)'] },
      { duration: 0.4, delay: 0.55, ease },
    );
  }

  if (announcement) animate(announcement, { opacity: [0, 1] }, { duration: 0.5, delay: 0.6, ease });

  // The h1 reveals line by line from behind a mask, 90ms apart.
  const lines = wordsByLine(words);
  lines.forEach((line, i) => {
    animate(line, { transform: ['translateY(110%)', 'translateY(0)'] }, { duration: 0.9, delay: 0.7 + i * 0.09, ease });
  });

  // Then the subline, buttons and fact strip fade in. All done by about 2.2s.
  const fadeStart = 0.7 + lines.length * 0.09 + 0.35;
  animate(afterTitle, { opacity: [0, 1] }, { duration: 0.6, delay: stagger(0.12, { startDelay: fadeStart }), ease });

  // On scroll, the photo moves at 60% speed and the overlay darkens slightly.
  if (media) {
    scroll(animate(media, { transform: ['translateY(0%)', 'translateY(40%)'] }, { ease: 'linear' }), {
      target: hero,
      offset: ['start start', 'end start'],
    });
  }
  if (dim) {
    scroll(animate(dim, { opacity: [0, 0.35] }, { ease: 'linear' }), {
      target: hero,
      offset: ['start start', 'end start'],
    });
  }
}
