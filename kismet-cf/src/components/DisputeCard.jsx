import { formatMoney } from '../utils/format';

export default function DisputeCard({ dispute }) {
  return (
    <div className="dispute-card">
      <div className="dispute-card-head">
        <div className="dispute-id-block">
          <div className="dispute-id-label">Dispute ID</div>
          <div className="dispute-id-value">{dispute.disputeId || 'DSP-XXXXXX'}</div>
        </div>
        <span className="pill pending">{dispute.status || 'Lodged — pending review'}</span>
      </div>
      <div className="dispute-details">
        <div className="detail-item">
          <div className="detail-label">Payment ID</div>
          <div className="detail-value mono">{dispute.paymentId || '—'}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Amount</div>
          <div className="detail-value">{dispute.amount ? formatMoney(dispute.amount) : '—'}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Provider ID</div>
          <div className="detail-value mono">{dispute.providerId || '—'}</div>
        </div>
      </div>
      <div className="dispute-reason">
        <span className="reason-label">Reason given</span>
        {dispute.reason || '—'}
      </div>
    </div>
  );
}
