// One helper for every conversion event. It pushes to the dataLayer (Google Tag Manager and GA4)
// and calls the Meta Pixel when it is present.

export type TrackEvent =
  | 'quote_start'
  | 'quote_submit'
  | 'whatsapp_click'
  | 'call_click'
  | 'email_click';

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    track?: typeof track;
  }
}

const pixelEvents: Partial<Record<TrackEvent, string>> = {
  quote_submit: 'Lead',
  whatsapp_click: 'Contact',
  call_click: 'Contact',
  email_click: 'Contact',
};

export function track(event: TrackEvent, params: Params = {}): void {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });

    if (typeof window.fbq === 'function') {
      const standard = pixelEvents[event];
      if (standard) window.fbq('track', standard, params);
      else window.fbq('trackCustom', event, params);
    }
  } catch {
    // Tracking must never break the page.
  }
}

/** Tracks clicks on WhatsApp, phone and email links anywhere on the page. */
export function initLinkTracking(): void {
  window.track = track;

  document.addEventListener('click', (e) => {
    const target = e.target as Element | null;
    const link = target?.closest<HTMLAnchorElement>('a[href]');
    if (!link) return;

    const href = link.getAttribute('href') ?? '';
    const location = link.dataset.trackLocation ?? link.closest('[data-track-area]')?.getAttribute('data-track-area') ?? undefined;

    if (href.startsWith('https://wa.me/')) track('whatsapp_click', { location });
    else if (href.startsWith('tel:')) track('call_click', { location });
    else if (href.startsWith('mailto:')) track('email_click', { location });
  });
}
