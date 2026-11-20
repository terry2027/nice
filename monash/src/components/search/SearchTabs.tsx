export default function SearchTabs() {
  return (
    <nav className="container-fluid content-wrapper search-global__nav">
      <div className="row">
        <div className="col-md-12">
          <h2 className="sr-only">Tabs</h2>
          <div className="navbar-expand-md text-center">
            <select className="search-tab__select" tabIndex={0} style={{ display: "none" }}>
              <option value="?form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">All results (128)</option>
              <option value="?form=simple&profile=_default&query=Accountancy&f.Tabs%7C1=Website&collection=mon%7Esp-main-search">Website (114)</option>
              <option value="?form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search&f.Tabs%7Cmon%7Eds-study-courses=Courses">Courses (1)</option>
              <option value="?f.Tabs%7Cmon%7Eds-research=Research&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">Research (7)</option>
              <option value="?form=simple&f.Tabs%7Cmon%7Eds-push-news%2Cmon%7Eds-push-events=News+and+Events&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">News and Events (26)</option>
            </select>
            <div className="collapse navbar-collapse" id="search-tabs">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link text-center active" href="?form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">All results</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="?form=simple&profile=_default&query=Accountancy&f.Tabs%7C1=Website&collection=mon%7Esp-main-search">
                    Website{' '}
                    <span className="search-facet-count">(114)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="?form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search&f.Tabs%7Cmon%7Eds-study-courses=Courses">
                    Courses{' '}
                    <span className="search-facet-count">(1)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="?f.Tabs%7Cmon%7Eds-research=Research&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">
                    Research{' '}
                    <span className="search-facet-count">(7)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="?form=simple&f.Tabs%7Cmon%7Eds-push-news%2Cmon%7Eds-push-events=News+and+Events&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">
                    News and Events{' '}
                    <span className="search-facet-count">(26)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
