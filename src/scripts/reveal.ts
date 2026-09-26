// Media tiles settle from scale 1.04 to 1 the first time they enter view.
export function initReveal(): void {
  const tiles = document.querySelectorAll<HTMLElement>('.media-reveal');
  if (!tiles.length) return;

  if (!('IntersectionObserver' in window)) {
    tiles.forEach((t) => t.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );

  tiles.forEach((t) => io.observe(t));
}
