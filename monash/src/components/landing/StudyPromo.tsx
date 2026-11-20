export default function StudyPromo() {
  return (
    <div className="promo-block no-cta">
      <div className="promo-block__media">
        <picture className="bg-cover-image">
          <img loading="lazy" srcSet="https://www.monash.edu/__data/assets/image/0010/4337038/varieties/banner.static.medium.jpg 571w, https://www.monash.edu/__data/assets/image/0010/4337038/varieties/banner.static.jpg 872w" sizes="(max-width:58.875em) 90vw, (min-width:58.876em) and (max-width:71.813em) 50vw, 569w" src="https://www.monash.edu/__data/assets/image/0010/4337038/Feature-box-web-230906_DM_Monash-0836.jpg" alt="" />
        </picture>
      </div>
      <div className="promo-block__overlay">
        <div className="promo-block__section">
          <h2 className="promo-block__heading">Your study options</h2>
          <div className="promo-block__description">
            <p>We know there's no single path to success. Choose from a wide range of study options co-designed with industry experts across undergraduate, postgraduate, graduate research and professional development – including highly sought-after double degrees. With study areas spanning established disciplines and emerging fields like AI, you can forge a path that fits your interests and ambitions.</p>
            <p>
              <a href="https://www.monash.edu/study/courses/find-a-course" className="btn">Search courses</a>
            </p>
            <p>
              <a href="https://www.monash.edu/study/courses" className="btn">Explore courses by interest area</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
