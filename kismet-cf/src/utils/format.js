export function formatMoney(amount) {
  if (typeof amount === 'string') {
    const cleaned = amount.replace(/[^0-9.-]+/g, '');
    const parsed = parseFloat(cleaned);
    if (!isNaN(parsed)) {
      return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(parsed);
    }
  }
  const n = Number(amount) || 0;
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(n);
}
