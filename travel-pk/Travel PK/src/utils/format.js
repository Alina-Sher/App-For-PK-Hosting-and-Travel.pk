export const pkr = (n) => 'PKR ' + Number(n).toLocaleString('en-PK');
export const todayISO = () => new Date().toISOString().slice(0, 10);
export const nightsBetween = (a, b) => {
  if (!a || !b) return 0;
  const d = Math.round((new Date(b) - new Date(a)) / 86400000);
  return d > 0 ? d : 0;
};
export const departures = () =>
  [14, 28, 45, 70].map((n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); });
export const fmtDate = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
