export function formatMoney(amount) {
  const n = Number(amount) || 0;
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(n);
}
