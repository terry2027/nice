import VerifiedBanner from '../components/VerifiedBanner';
import StatCard from '../components/StatCard';
import PaymentsTable from '../components/PaymentsTable';
import { formatMoney } from '../utils/format';

export default function AccountPage({ account, disputeCount }) {
  const payments = account.payments || [];
  const outstandingTotal = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

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
          <StatCard label="Missing payments" value={payments.length} sub="Not yet issued" />
          <StatCard label="Open disputes" value={disputeCount} sub="Pending review" />
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
