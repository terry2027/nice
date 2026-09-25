import { formatMoney } from '../utils/format';

const getStatusClass = (status) => {
  const s = String(status || '').toLowerCase();
  if (s === 'completed' || s === 'resolved') return 'pill resolved';
  if (s === 'pending') return 'pill pending';
  return 'pill missing';
};

export default function PaymentsTable({ payments }) {
  if (!payments || payments.length === 0) {
    return (
      <table className="payments">
        <thead>
          <tr><th>Payment ID</th><th>Service date</th><th>Amount</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td colSpan={4} className="empty-state">No missing payments found.</td></tr>
        </tbody>
      </table>
    );
  }

  return (
    <table className="payments">
      <thead>
        <tr><th>Payment ID</th><th>Service date</th><th>Amount</th><th>Status</th></tr>
      </thead>
      <tbody>
        {payments.map((p, index) => (
          <tr key={p.paymentId || p.id || index}>
            <td>{p.paymentId || p.id}</td>
            <td>{p.serviceDate || p.date}</td>
            <td className="amount">{formatMoney(p.amount)}</td>
            <td><span className={getStatusClass(p.status)}>{p.status || 'Missing'}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
