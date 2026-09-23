import DisputeCard from '../components/DisputeCard';

export default function DisputesPage({ disputes }) {
  const title = disputes.length === 1 ? 'Dispute lodged' : `${disputes.length} disputes lodged`;

  return (
    <main className="page active">
      <div className="wrap narrow">
        <div className="success-hero">
          <div className="success-icon">
            <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
          </div>
          <h1>{title}</h1>
          <p>The payments team has been notified and will review each case.</p>
        </div>

        <div className="dispute-list">
          {disputes.map((d, i) => (
            <DisputeCard dispute={d} key={d.disputeId || i} />
          ))}
        </div>

        <div className="disclaimer">
          <strong>What happens next:</strong> the payments team will review each dispute within 3
          business days. This confirmation does not confirm a refund, payment outcome, or payment
          timing.
        </div>
      </div>
    </main>
  );
}
