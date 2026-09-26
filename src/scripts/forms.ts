// Shared helpers for the Netlify forms: submit with fetch, validate phone numbers, show field errors.

/** Posts the form to Netlify as application/x-www-form-urlencoded. */
export async function submitNetlifyForm(form: HTMLFormElement): Promise<void> {
  const data = new FormData(form);
  const body = new URLSearchParams();
  data.forEach((value, key) => {
    if (typeof value === 'string') body.append(key, value);
  });
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
}

/**
 * Sri Lankan numbers with or without spaces, a leading 0 or +94 (for example 077 123 4567 or +94 77 123 4567),
 * and international numbers that start with +.
 */
export function isValidPhone(raw: string): boolean {
  const n = raw.replace(/[\s\-().]/g, '');
  if (/^0\d{9}$/.test(n)) return true;
  if (/^(\+94|0094|94)\d{9}$/.test(n)) return true;
  return /^\+(?!94)\d{7,15}$/.test(n);
}

export function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}

/** Shows or clears the message under a field. The message element is aria-live, so it is announced. */
export function setFieldError(field: HTMLElement, errorEl: HTMLElement | null, message: string): void {
  if (message) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
  if (errorEl) errorEl.textContent = message;
}
