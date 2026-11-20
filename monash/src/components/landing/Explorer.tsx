export default function Explorer() {
  return (
    <div id="c4378538" className="row explorer-cta bottom-gap--standard" explorer-cta="">
      <video poster="https://www.monash.edu/__data/assets/image/0012/2274996/monash_explorer_converted-1-dragged.jpg" preload="none" autoPlay playsInline muted loop id="explorer-cta__video" className="explorer-cta__video" src="https://www.monash.edu/__data/assets/video_file/0019/4430224/Learning_In_Motion_Subclip_Web.mp4"></video>
      <div className="row col-md-12 justify-content-center explorer-cta__content-wrapper">
        <div className="col-md-5 explorer-cta__content">
          <div className="explorer-cta__heading graphite-h2">Monash Explorer</div>
          <div className="explorer-cta__description graphite-intro">
            <p>
              Discover life at Monash University through the eyes of students, staff, alumni and academics.
              <br />
              Anytime. Anywhere.
            </p>
          </div>
        </div>
        <a target="_blank" className="graphite-btn explorer-cta__CTA" href="https://explorer.monash.edu/">Explore now</a>
      </div>
      <div className="explorer-cta__container desktop-only" explorer-cta__container="">
        <div className="explorer-cta__inner" explorer-cta__inner="">
          <div className="explorer-cta__toggle video-ui-toggle playing" title="Play/Pause background video" id="explorer-cta__video-toggle" explorer-cta__toggle="">
            <button aria-label="Play/Pause background video" className="explorer-cta__button" explorer-cta__button="">
              <svg className="icon pause" aria-hidden="true">
                <use className="play-pause-icon" href="/monash-icons.svg#pause-filled" />
              </svg>
              <svg className="icon play visuallyhidden" aria-hidden="true">
                <use className="play-pause-icon" href="/monash-icons.svg#media-play-filled" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
