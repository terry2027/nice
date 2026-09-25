import VerifiedBanner from '../components/VerifiedBanner';
import StatCard from '../components/StatCard';
import PaymentsTable from '../components/PaymentsTable';
import { formatMoney } from '../utils/format';

const parseAmount = (amt) => {
  if (typeof amt === 'number') return amt;
  if (typeof amt === 'string') {
    const cleaned = amt.replace(/[^0-9.-]+/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
};

export default function AccountPage({ account, disputeCount }) {
  const payments = account.payments || [];

  // Filter missing/pending payments if statuses are defined
  const missingPayments = payments.filter((p) => {
    if (!p.status) return true;
    const s = String(p.status).toLowerCase();
    return s === 'missing' || s === 'pending';
  });

  // Calculate missing count and outstanding total
  const missingCount = payments.some((p) => p.status) ? missingPayments.length : payments.length;
  const targetPayments = payments.some((p) => p.status) && missingPayments.length > 0 ? missingPayments : payments;
  const outstandingTotal = targetPayments.reduce((sum, p) => sum + parseAmount(p.amount), 0);

  return (
    <main className="page active">
      <div className="wrap narrow">
        <VerifiedBanner providerId={account.providerId || 'MER48213'} />

        <div className="page-head">
          <div>
            <h1>{account.providerName || 'Sunrise Support Services'}</h1>
            <p>Provider account &amp; payment overview</p>
          </div>
          <a href="#" className="btn small">Update profile</a>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h2>Provider details</h2>
            <span className="hint">From your Kismet provider profile</span>
          </div>
          <div className="details-grid">
            <div className="detail-item">
              <div className="detail-label">Provider ID</div>
              <div className="detail-value mono">{account.providerId || 'MER48213'}</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Business name</div>
              <div className="detail-value">{account.providerName || 'Sunrise Support Services'}</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Primary category</div>
              <div className="detail-value">{account.category || 'Support Work'}</div>
            </div>
          </div>
        </div>

        <div className="stat-row">
          <StatCard label="Missing payments" value={missingCount} sub="Not yet issued" />
          <StatCard label="Open disputes" value={disputeCount ?? 0} sub="Pending review" />
          <StatCard label="Total outstanding" value={formatMoney(outstandingTotal)} sub="AUD" />
        </div>

        <div className="panel">
          <div className="panel-head">
            <h2>Payment information</h2>
            <span className="hint">Populated live by Kai</span>
          </div>
          <PaymentsTable payments={payments} />
        </div>
      </div>
    </main>
  );
}
