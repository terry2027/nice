export default function SearchFacets() {
  return (
    <div className="col-md-3 search-facets order-lg-first order-xl-first">
      <div className="search-facet__close" style={{ display: "none" }}>
        <button type="button" className="search-facet__btn--close">
          <span className="search-facet__close-text">Close</span>
          <span className="visuallyhidden">Close</span>
        </button>
      </div>
      <div className="card search-refine">
        <div className="card-header bg-black text-black">
          <h3>Refine your results</h3>
        </div>
      </div>
      <div className="card search-facet">
        <div className="card-body">
          <div className="card-title">
            <h4>Faculties</h4>
          </div>
          <ul className="list-unstyled">
            <li>
              <a className=" " href="?form=simple&f.Faculties%7C32=Business+and+Economics&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">
                <span className="fa fa-square-o"></span>
                {' '}Business and Economics
              </a>
              {' '}
              <span className="badge badge-default float-right">31</span>
            </li>
            <li>
              <a className=" " href="?form=simple&profile=_default&query=Accountancy&f.Faculties%7C33=Education&collection=mon%7Esp-main-search">
                <span className="fa fa-square-o"></span>
                {' '}Education
              </a>
              {' '}
              <span className="badge badge-default float-right">7</span>
            </li>
          </ul>
          <button type="button" className="btn btn-link btn-sm search-toggle-more-categories" style={{ display: "none" }} title="Show more categories from this facet">
            <small className="fa fa-plus"></small>
            {' '}
            <span>More…</span>
          </button>
        </div>
      </div>
      <div className="card search-facet">
        <div className="card-body">
          <div className="card-title">
            <h4>Format</h4>
          </div>
          <ul className="list-unstyled">
            <li>
              <a className=" " href="?f.Format%7Cf=Web+pages&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">
                <span className="fa fa-square-o"></span>
                {' '}Web pages
              </a>
              {' '}
              <span className="badge badge-default float-right">40</span>
            </li>
            <li>
              <a className=" " href="?f.Format%7Cf=Documents&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">
                <span className="fa fa-square-o"></span>
                {' '}Documents
              </a>
              {' '}
              <span className="badge badge-default float-right">31</span>
            </li>
          </ul>
          <button type="button" className="btn btn-link btn-sm search-toggle-more-categories" style={{ display: "none" }} title="Show more categories from this facet">
            <small className="fa fa-plus"></small>
            {' '}
            <span>More…</span>
          </button>
        </div>
      </div>
      <div className="card search-facet">
        <div className="card-body">
          <div className="card-title">
            <h4>Date</h4>
          </div>
          <ul className="list-unstyled">
            <li>
              <a className=" " href="?f.Date%7Cd=d%3E12Nov2026%3C21Nov2026+%3A%3A+Past+week&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">Past week</a>
              {' '}
              <span className="badge badge-default float-right">4</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3E05Nov2026%3C21Nov2026+%3A%3A+Past+fortnight&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">Past fortnight</a>
              {' '}
              <span className="badge badge-default float-right">5</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3E19Oct2026%3C21Nov2026+%3A%3A+Past+month&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">Past month</a>
              {' '}
              <span className="badge badge-default float-right">7</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3E19Aug2026%3C21Nov2026+%3A%3A+Past+3+months&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">Past 3 months</a>
              {' '}
              <span className="badge badge-default float-right">22</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3E19May2026%3C21Nov2026+%3A%3A+Past+6+months&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">Past 6 months</a>
              {' '}
              <span className="badge badge-default float-right">38</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3E19Nov2025%3C21Nov2026+%3A%3A+Past+year&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">Past year</a>
              {' '}
              <span className="badge badge-default float-right">49</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2026+%3A%3A+2026&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2026</a>
              {' '}
              <span className="badge badge-default float-right">49</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2025+%3A%3A+2025&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2025</a>
              {' '}
              <span className="badge badge-default float-right">8</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2024+%3A%3A+2024&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2024</a>
              {' '}
              <span className="badge badge-default float-right">9</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2023+%3A%3A+2023&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2023</a>
              {' '}
              <span className="badge badge-default float-right">6</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2022+%3A%3A+2022&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2022</a>
              {' '}
              <span className="badge badge-default float-right">10</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2021+%3A%3A+2021&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2021</a>
              {' '}
              <span className="badge badge-default float-right">6</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2020+%3A%3A+2020&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2020</a>
              {' '}
              <span className="badge badge-default float-right">4</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2019+%3A%3A+2019&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2019</a>
              {' '}
              <span className="badge badge-default float-right">8</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2018+%3A%3A+2018&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2018</a>
              {' '}
              <span className="badge badge-default float-right">6</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2017+%3A%3A+2017&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2017</a>
              {' '}
              <span className="badge badge-default float-right">2</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2016+%3A%3A+2016&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2016</a>
              {' '}
              <span className="badge badge-default float-right">2</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2015+%3A%3A+2015&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2015</a>
              {' '}
              <span className="badge badge-default float-right">1</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2014+%3A%3A+2014&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2014</a>
              {' '}
              <span className="badge badge-default float-right">1</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2012+%3A%3A+2012&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2012</a>
              {' '}
              <span className="badge badge-default float-right">1</span>
            </li>
            <li>
              <a className=" " href="?f.Date%7Cd=d%3D2006+%3A%3A+2006&form=simple&profile=_default&query=Accountancy&collection=mon%7Esp-main-search">2006</a>
              {' '}
              <span className="badge badge-default float-right">2</span>
            </li>
          </ul>
          <button type="button" className="btn btn-link btn-sm search-toggle-more-categories" style={{ display: "none" }} title="Show more categories from this facet">
            <small className="fa fa-plus"></small>
            {' '}
            <span>More…</span>
          </button>
        </div>
      </div>
    </div>
  )
}
