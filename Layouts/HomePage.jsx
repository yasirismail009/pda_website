import Navbar from "../Components/Navbar/Navbar";
import LandingPage from "../Components/Homepage/Landingpage";
import RatingsTickerData from "../Components/RatingTicker";
import Services from "../Components/Services/index";
import Pricing from "../Components/Pricing/index";
import OtherProduct from "../Components/OtherProduct/index";
import FeedbackModule from "../Components/Feedback/index";
import News from "../Components/News/index";

const Landing = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:py-20 sm:py-0 py-0 lg:pt-0 sm:pt-4 pt-4 bg-primary-main">
        <Navbar />
        <LandingPage />
        <p className="lg:ml-8 sm:ml-0 ml-0 text-primary-dark text-2xl font-bold text-center mb-8">
          User Reviews
        </p>
        <RatingsTickerData />
      </div>
      <div className="pt-40">
        <Services />
      </div>
      <Pricing />
      <OtherProduct />
      <FeedbackModule />
      <News />
    </div>
  );
};

export default Landing;
