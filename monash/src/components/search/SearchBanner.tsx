export default function SearchBanner() {
  return (
    <div className="jumbotron jumbotron-fluid search-global__banner">
      <div className="content-wrapper">
        <strong className="h1 text-center">Search Monash University</strong>
        <form action="" method="GET">
          <input type="hidden" name="collection" defaultValue="mon~sp-main-search" />
          <input type="hidden" name="form" defaultValue="simple" />
          <input type="hidden" name="profile" defaultValue="_default" />
          <div className="input-group">
            <div className="input-group-addon search-global__icon-search">
              <img src="/icon-search.svg" alt="" />
              <span className="sr-only">Icon search</span>
            </div>
            <input required name="query" id="main-query" title="Search query" type="search" defaultValue="Accountancy" accessKey="q" className="form-control input-lg query" />
            <div className="input-group-addon">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
