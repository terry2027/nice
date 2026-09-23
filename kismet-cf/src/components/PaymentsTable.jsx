import { formatMoney } from '../utils/format';

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
            <td><span className="pill missing">{p.status || 'Missing'}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
