import bannerFull from '../../assets/landing/banner-full.png'
import bannerLarge from '../../assets/landing/banner-large.png'
import bannerMedium from '../../assets/landing/banner-medium.png'
import bannerSmall from '../../assets/landing/banner-small.png'

export default function Banner() {
  return (
    <div className="banner-graphite">
      <div className="banner-graphite__media--wrapper" style={{ height: "700px" }}>
        <picture className="bg-cover-image">
          <img srcSet={`${bannerSmall} 605w, ${bannerMedium} 960w, ${bannerLarge} 1467w`} src={bannerFull} alt="Web Banner" />
        </picture>
      </div>
      <div className="banner-graphite__inner" style={{ height: "700px" }}>
        <div className="content-wrapper">
          <div className="banner-graphite__contents">
            <div className="banner-graphite__contents-inner">
              <h2 className="banner-graphite__heading graphite-h2">MONASH CHANGE DAY</h2>
              <a href="https://www.monash.edu/change-of-preference/change-day" className="banner-graphite__link graphite-nav-link">
                Friday 11 December 2026
                <svg className="icon">
                  <use href="/monash-icons.svg#nav-arrow-right" />
                </svg>
              </a>
            </div>
            <div className="banner-search-graphite__form-wrapper">
              <form method="get" action="https://www.monash.edu/search" role="search" name="macro banner search" id="banner-search-graphite__form" className="">
                <div className="banner-search-graphite__input-wrapper">
                  <button type="submit" className="banner-search-graphite__button-search">
                    <svg className="banner-search-graphite__icon">
                      <use className="icon" href="/monash-icons.svg#search" />
                    </svg>
                    <span className="visuallyhidden" aria-hidden="true">Search courses</span>
                    <span className="hidden visuallyhidden banner-search-graphite__destination">https://www.monash.edu/search</span>
                  </button>
                  <button className="banner-search-graphite__button-back" aria-label="Exit search">
                    <svg className="banner-search-graphite__icon">
                      <use className="icon" href="/monash-icons.svg#nav-arrow-left" />
                    </svg>
                  </button>
                  <input type="hidden" name="collection" defaultValue="mon~sp-main-search" disabled />
                  <input type="search" placeholder="Search courses" aria-label="Search Monash University" id="banner-search-graphite" className="banner-search-graphite__input" name="query" autoComplete="off" />
                  <button className="banner-search-graphite__button-clear" aria-label="Clear query" tabIndex={0}>
                    <svg className="banner-search-graphite__icon">
                      <use className="icon" href="/monash-icons.svg#close" />
                    </svg>
                  </button>
                  <div className="placeholder">
                    <div className="static">Search</div>
                    <div className="rw-words">
                      <span className="animate-in">courses</span>
                      <span className="animate-out">FAQs</span>
                      <span className="animate-out">all things Monash</span>
                    </div>
                  </div>
                </div>
                <button type="submit" className="banner-search-graphite__all-results" tabIndex={-1}>
                  See all other results
                  <svg className="icon">
                    <use href="/monash-icons.svg#nav-arrow-right" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="monash-m__wrapper" aria-hidden="true">
          <div className="monash-m-new bg-white" style={{ clipPath: "url(#swipe__clip-path)" }}>
            <svg className="clip-svg">
              <defs>
                <clipPath id="swipe__clip-path" clipPathUnits="objectBoundingBox">
                  <polygon points="0.5745 0, 0.5 0.33, 0.42 0, 0 0, 0 1, 0.27 1, 0.27 0.59, 0.37 1, 0.634 1, 0.736 0.59, 0.736 1, 1 1, 1 0, 0.5745 0" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
