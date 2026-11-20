export default function ResearchCards() {
  return (
    <div className="graphite-cardsgrid width-33 card-grid--3up card-grid--default-icons card-grid--blue">
      <ul className="graphite-cardsgrid__list" role="list">
        <li className="graphite-cardsgrid__item">
          <a href="https://www.monash.edu/research/missions">
            <div className="graphite-cardsgrid__body">
              <h3 className="graphite-cardsgrid__heading graphite-h4">Research focus areas</h3>
              <p className="graphite-cardsgrid__text graphite-meta">Our research strengths span medicines and vaccines, clean energy, climate resilience, advanced manufacturing, artificial intelligence and thriving communities.</p>
            </div>
          </a>
        </li>
        <li className="graphite-cardsgrid__item">
          <a href="https://www.monash.edu/monash-innovation">
            <div className="graphite-cardsgrid__body">
              <h3 className="graphite-cardsgrid__heading graphite-h4">Commercialisation and entrepreneurship</h3>
              <p className="graphite-cardsgrid__text graphite-meta">Monash Innovation transforms research into new ventures, technologies and solutions by connecting researchers, entrepreneurs, industry and investors.</p>
            </div>
          </a>
        </li>
        <li className="graphite-cardsgrid__item">
          <a href="https://www.monash.edu/research/phd-masters-by-research">
            <div className="graphite-cardsgrid__body">
              <h3 className="graphite-cardsgrid__heading graphite-h4">PhD and Masters by Research</h3>
              <p className="graphite-cardsgrid__text graphite-meta">Our research degree programs empower aspiring researchers through expert guidance and advanced training to contribute original discoveries in their field.</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
