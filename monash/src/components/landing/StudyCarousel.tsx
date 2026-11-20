export default function StudyCarousel() {
  return (
    <div className="card-image-carousel slide--0">
      <div className="card-image-carousel__inner">
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress">
          <div className="card-image-carousel__wrapper" id="swiper-wrapper-9ea163bf1c4f36d7" aria-live="polite">
            <div className="card-image-carousel__slide swiper-slide-visible swiper-slide-active" aria-label="1 / 6" role="group">
              <a href="https://www.monash.edu/study/fees-scholarships" className="card-image">
                <div className="card-image__thumbnail">
                  <img alt="" className="swiper-lazy swiper-lazy-loaded" src="https://www.monash.edu/__data/assets/image/0005/3937640/Student-experience-student-in-design-studio.jpg" />
                </div>
                <div className="card-image__body">
                  <h4 className="card-image__heading graphite-h4">Fees and scholarships</h4>
                  <p className="graphite-p-s card-image__description"></p>
                  <svg className="icon card-image__icon">
                    <use href="/monash-icons.svg#nav-arrow-right" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="card-image-carousel__slide swiper-slide-visible swiper-slide-next" aria-label="2 / 6" role="group">
              <a href="https://www.monash.edu/about/events?f.Event+categories%7C9=future+student+events+-+postgraduate&f.Event+categories%7C9=future+student+events+-+undergraduate" className="card-image">
                <div className="card-image__thumbnail">
                  <img alt="" className="swiper-lazy swiper-lazy-loaded" src="https://www.monash.edu/__data/assets/image/0003/4335114/Feature-box-web-221102_CS1045M1087.jpg" />
                </div>
                <div className="card-image__body">
                  <h4 className="card-image__heading graphite-h4">Upcoming events for future students</h4>
                  <p className="graphite-p-s card-image__description"></p>
                  <svg className="icon card-image__icon">
                    <use href="/monash-icons.svg#nav-arrow-right" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="card-image-carousel__slide swiper-slide-visible" aria-label="3 / 6" role="group">
              <a href="https://www.monash.edu/study/how-to-apply" className="card-image">
                <div className="card-image__thumbnail">
                  <img alt="" className="swiper-lazy swiper-lazy-loaded" src="https://www.monash.edu/__data/assets/image/0009/3525174/academic-and-student-with-laptop.jpg" />
                </div>
                <div className="card-image__body">
                  <h4 className="card-image__heading graphite-h4">How to apply</h4>
                  <p className="graphite-p-s card-image__description"></p>
                  <svg className="icon card-image__icon">
                    <use href="/monash-icons.svg#nav-arrow-right" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="card-image-carousel__slide" aria-label="4 / 6" role="group" style={{ width: "360px", marginRight: "30px" }}>
              <a href="https://www.monash.edu/study/international" className="card-image">
                <div className="card-image__thumbnail">
                  <img alt="" className="swiper-lazy" />
                </div>
                <div className="card-image__body">
                  <h4 className="card-image__heading graphite-h4">Information for international students</h4>
                  <p className="graphite-p-s card-image__description"></p>
                  <svg className="icon card-image__icon">
                    <use href="/monash-icons.svg#nav-arrow-right" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="card-image-carousel__slide" aria-label="5 / 6" role="group" style={{ width: "360px", marginRight: "30px" }}>
              <a href="https://www.monash.edu/admissions/help" className="card-image">
                <div className="card-image__thumbnail">
                  <img alt="" className="swiper-lazy" />
                </div>
                <div className="card-image__body">
                  <h4 className="card-image__heading graphite-h4">Pathways to university</h4>
                  <p className="graphite-p-s card-image__description"></p>
                  <svg className="icon card-image__icon">
                    <use href="/monash-icons.svg#nav-arrow-right" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-image-carousel__nav-button card-image-carousel__prev" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-9ea163bf1c4f36d7">
        <svg className="icon card-image-carousel__icon">
          <use href="/monash-icons.svg#chevron-left" />
        </svg>
      </div>
      <div className="card-image-carousel__nav-button card-image-carousel__next" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-9ea163bf1c4f36d7">
        <svg className="icon card-image-carousel__icon">
          <use href="/monash-icons.svg#chevron-right" />
        </svg>
      </div>
    </div>
  )
}
