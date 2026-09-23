export default function VerifiedBanner({ providerId }) {
  return (
    <div className="verified-banner">
      <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
      Identity verified — Provider ID <strong>{providerId}</strong>
    </div>
  );
}
