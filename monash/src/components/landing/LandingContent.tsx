import Banner from './Banner'
import IntroChange from './IntroChange'
import StudyPromo from './StudyPromo'
import StudyCarousel from './StudyCarousel'
import WhyMonash from './WhyMonash'
import ResearchHeading from './ResearchHeading'
import ResearchPromo from './ResearchPromo'
import ResearchCards from './ResearchCards'
import LocationsIntro from './LocationsIntro'
import LocationsFacts from './LocationsFacts'
import Explorer from './Explorer'
import ConnectIntro from './ConnectIntro'
import QuickLinks from './QuickLinks'
import RankingsBanner from './RankingsBanner'
import NewsHeading from './NewsHeading'
import NewsListing from './NewsListing'

export default function LandingContent() {
  return (
    <div className="content bg-white l--content">
      <div className="content-wrapper">
        <h1 className="visuallyhidden">Home</h1>
      </div>
        <Banner />
        <IntroChange />
        <StudyPromo />
        <StudyCarousel />
        <WhyMonash />
        <ResearchHeading />
        <ResearchPromo />
        <ResearchCards />
        <LocationsIntro />
        <LocationsFacts />
        <Explorer />
        <ConnectIntro />
        <QuickLinks />
        <RankingsBanner />
        <NewsHeading />
        <NewsListing />
    </div>
  )
}
