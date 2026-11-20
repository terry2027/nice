export default function QuickLinks() {
  return (
    <section className="quick-links">
      <div className="row quick-links__wrapper-fill-width">
        <div className="col-sm-12 col-md-4 quick-links__list-wrapper">
          <ul className="quick-links__list">
            <li className="quick-links__item">
              <span className="quick-links__link-wrapper">
                <a href="https://www.monash.edu/about/events" className="quick-links__link">
                  <span className="quick-links__icon" style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/file/0007/2179447/arrow-right.svg')" }}></span>
                  <h4 className="quick-links__link-text">Browse upcoming events</h4>
                </a>
              </span>
            </li>
            <li className="quick-links__item">
              <span className="quick-links__link-wrapper">
                <a href="https://www.monash.edu/research/find" className="quick-links__link">
                  <span className="quick-links__icon" style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/file/0007/2179447/arrow-right.svg')" }}></span>
                  <h4 className="quick-links__link-text">Find a researcher</h4>
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 quick-links__list-wrapper">
          <ul className="quick-links__list">
            <li className="quick-links__item">
              <span className="quick-links__link-wrapper">
                <a href="https://www.monash.edu/alumni/connect/meet-your-alumni-community" className="quick-links__link">
                  <span className="quick-links__icon" style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/file/0007/2179447/arrow-right.svg')" }}></span>
                  <h4 className="quick-links__link-text">Join our alumni community</h4>
                </a>
              </span>
            </li>
            <li className="quick-links__item">
              <span className="quick-links__link-wrapper">
                <a href="https://www.monash.edu/alumni/monash-life" className="quick-links__link">
                  <span className="quick-links__icon" style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/file/0007/2179447/arrow-right.svg')" }}></span>
                  <h4 className="quick-links__link-text">Explore alumni stories</h4>
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 quick-links__list-wrapper">
          <ul className="quick-links__list">
            <li className="quick-links__item">
              <span className="quick-links__link-wrapper">
                <a href="https://www.monash.edu/giving/ways-to-give" className="quick-links__link">
                  <span className="quick-links__icon" style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/file/0007/2179447/arrow-right.svg')" }}></span>
                  <h4 className="quick-links__link-text">Create change through giving</h4>
                </a>
              </span>
            </li>
            <li className="quick-links__item">
              <span className="quick-links__link-wrapper">
                <a href="https://www.monash.edu/students/support/connect" className="quick-links__link">
                  <span className="quick-links__icon" style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/file/0007/2179447/arrow-right.svg')" }}></span>
                  <h4 className="quick-links__link-text">Support for current students</h4>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
