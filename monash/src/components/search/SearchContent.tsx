import SearchBanner from './SearchBanner'
import SearchTabs from './SearchTabs'
import SearchControls from './SearchControls'
import SearchResultList from './SearchResultList'
import SearchPagination from './SearchPagination'
import SearchFacets from './SearchFacets'
import SearchFacetToggle from './SearchFacetToggle'

// Static render of the monash.edu search results page (query: "Accountancy").
export default function SearchContent() {
  return (
    <div className="content bg-white l--content">
      <div className="content-wrapper">
        <h1 className="visuallyhidden">Search</h1>
        <section className="search-global">
          <SearchBanner />
          <SearchTabs />
          <section className="search-results">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-9">
                  <SearchControls />
                  <SearchResultList />
                  <SearchPagination />
                </div>
                <SearchFacets />
              </div>
            </div>
          </section>
          <SearchFacetToggle />
        </section>
      </div>
    </div>
  )
}
