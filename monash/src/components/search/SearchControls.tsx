export default function SearchControls() {
  return (
    <>
      <div className="dropdown float-right ml-1">
        <button className="btn btn-light btn-sm dropdown-toggle" id="search-limit" type="button" aria-haspopup="true" aria-expanded="false">
          <span className="text-muted">Limit:</span>
          {' '}10
        </button>
        <div className="dropdown-menu" aria-labelledby="search-limit">
          <a className="dropdown-item" title="Limit to 10 results" href="?collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy&num_ranks=10">10 results</a>
          {' '}
          <a className="dropdown-item" title="Limit to 20 results" href="?collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy&num_ranks=20">20 results</a>
          {' '}
          <a className="dropdown-item" title="Limit to 50 results" href="?collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy&num_ranks=50">50 results</a>
        </div>
      </div>
      <div className="dropdown float-right">
        <button className="btn btn-light btn-sm dropdown-toggle" id="search-sort" type="button" aria-haspopup="true" aria-expanded="false">
          <span className="text-muted">Sort:</span>
          {' '}Relevance
        </button>
        <div className="dropdown-menu" aria-labelledby="search-sort">
          <a className="dropdown-item" title="Sort by Relevance" href="??collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy&sort=">Relevance</a>
          {' '}
          <a className="dropdown-item" title="Sort by Date (Newest first)" href="??collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy&sort=date">Date (Newest first)</a>
          {' '}
          <a className="dropdown-item" title="Sort by Date (Oldest first)" href="??collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy&sort=adate">Date (Oldest first)</a>
          {' '}
          <a className="dropdown-item" title="Sort by Title (A-Z)" href="??collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy&sort=title">Title (A-Z)</a>
          {' '}
          <a className="dropdown-item" title="Sort by Title (Z-A)" href="??collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy&sort=dtitle">Title (Z-A)</a>
        </div>
      </div>
      <div className="row search-counts text-muted">
        <div className="col-md-12">
          <span className="search-counts-page-start">1</span>
          {' '}-{' '}
          <span className="search-counts-page-end">10</span>
          {' '}of{' '}
          <span className="search-counts-total-matching">128</span>
          {' '}search results for{' '}
          <strong>Accountancy</strong>
        </div>
      </div>
    </>
  )
}
