export default function ResearchPromo() {
  return (
    <a className="promo-block" href="https://www.monash.edu/research" rel="external">
      <div className="promo-block__media">
        <picture className="bg-cover-image">
          <img loading="lazy" srcSet="https://www.monash.edu/__data/assets/image/0018/4082400/varieties/feature.box.jpg 690w, https://www.monash.edu/__data/assets/image/0018/4082400/varieties/banner.static.medium.jpg 690w, https://www.monash.edu/__data/assets/image/0018/4082400/varieties/banner.static.jpg 690w" sizes="(max-width:58.875em) 90vw, (min-width:58.876em) and (max-width:71.813em) 50vw, 569w" src="https://www.monash.edu/__data/assets/image/0018/4082400/Every-Second-Marks-Change-film-still.jpg" alt="Person looking at screen with a clock counting down on it" />
        </picture>
      </div>
      <div className="promo-block__overlay">
        <div className="promo-block__tag">Research excellence</div>
        <div className="promo-block__section">
          <h2 className="promo-block__heading">Turning discovery into impact</h2>
          <div className="promo-block__description">
            <p>Monash research mobilises world-leading academics, industry partners and communities to advance breakthroughs in health, technology, sustainability and beyond. Through our supportive research environment and ambitious research agenda, we empower the next generation of researchers to drive meaningful change.</p>
          </div>
          <span className="promo-block__btn btn btn-lg">Learn more about research at Monash</span>
        </div>
      </div>
    </a>
  )
}
