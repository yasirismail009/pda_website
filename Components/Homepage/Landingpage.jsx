import Image from "next/image";

// Import assets
import LandingImg from "../../Assets/Landing_img.png";
import DownloadIcon from "../../Assets/downloads.svg";
import RatingIcon from "../../Assets/ratings.svg";
import LanguageIcon from "../../Assets/languages.svg";
import AppleStoreIcon from "../../Assets/apple_store.svg";
import PlayStoreIcon from "../../Assets/play_store.svg";

// const analytics = getAnalytics();
// logEvent(analytics, "play_store_button", { name: "clicked" });
// logEvent(analytics, "apple_store_button", { name: "clicked" });

export default function LandingPage() {
  return (
    <div id="home" className="w-full lg:mb-40 sm:mb-20 mb-20 sm:px-4 px-4">
      <div className="w-full lg:flex md:flex flex-col sm:block block lg:h-screen sm:h-full h-full items-center justify-center lg:mt-2 sm:mt-0 mt-0">
        <div className="w-full flex items-center justify-center lg:ml-6 lg:px-[500px] lg:mt-36 sm:mt-20 mt-20">
          <Image src={LandingImg} alt="Privacy Defender App" priority />
        </div>
        <div className="lg:text-4xl sm:text-4xl text-4xl font-bold lg:text-left sm:text-center text-center text-primary-dark pb-24 lg:mt-8 sm:mt-8 mt-8">
          <span className="text-[#ffc200]"> All-In-One</span>{" "}
          <span>Mobile Security</span>{" "}
          <span className="text-[#ffc200]">and</span>
          <span> Privacy </span>
        </div>
        <div className="lg-w-[40%] sm:w-full w-full flex lg:flex-row sm:flex-wrap flex-wrap items-center justify-center">
          <div className="lg:mb-0 sm:mb-4 mb-4">
            <div className="flex flex-row lg:ml-4 sm:ml-0 ml-0">
              <Image src={DownloadIcon} alt="downloads" />
              <div className="text-[#ffc200] lg:text-3xl sm:text-2xl text-2xl font-bold lg:ml-4 sm:ml-2 ml-2">
                50K+
              </div>
              <div className="text-primary-dark font-bold lg:text-base sm:text-xs text-xs mt-4 lg:ml-2 sm:ml-1 ml-1">
                Downloads
              </div>
            </div>
          </div>
          <div className="lg:mb-0 sm:mb-2 mb-2 lg:ml-0 sm:ml-2 ml-2">
            <div className="flex flex-row lg:ml-4 sm:ml-0 ml-0">
              <Image src={RatingIcon} alt="downloads" />
              <div className="text-[#ffc200] lg:text-3xl sm:text-2xl text-2xl  font-bold ml-4">
                4.8
              </div>
              <div className="text-primary-dark font-bold lg:text-base sm:text-xs text-xs mt-4 ml-2">
                Rating
              </div>
            </div>
          </div>
          <div className=" lg:mb-0 sm:mb-2 mb-2 ">
            <div className="flex flex-row lg:ml-4 sm:ml-2 ml-2">
              <Image src={LanguageIcon} alt="downloads" />
              <div className="text-[#ffc200] lg:text-3xl sm:text-2xl text-2xl  font-bold ml-4">
                6+
              </div>
              <div className="text-primary-dark font-bold lg:text-base sm:text-xs text-xs mt-4 ml-2">
                Languages
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-8  items-center justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.pligence.privacydefender"
            target="_blank"
          >
            <div
              id="play_store_button"
              className="flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-5 px-5 lg:py-2  sm:py-1 py-1 text-primary-main bg-primary-dark hover:bg-primary-card   rounded-xl shadow-2xl"
            >
              <Image
                src={PlayStoreIcon}
                alt="Privacy Defender App"
                className="lg:p-1 sm:p-1 p-1"
              />
              <div className="lg:text-base sm:text-xs text-xs font-semibold lg:ml-4 sm:ml-2 ml-2">
                Play Store
              </div>
            </div>
          </a>
          <a
            href="https://apps.apple.com/us/app/privacy-defender/id1588734793"
            target="_blank"
          >
            <div
              id="apple_store_button"
              className="flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-5 px-5 lg:py-2  sm:py-1 py-1 bg-primary-text hover:bg-primary-main   rounded-xl shadow-md shadow-slate-400 lg:ml-8 sm:ml-2 ml-2"
            >
              <Image
                src={AppleStoreIcon}
                alt="Privacy Defender App"
                className="lg:p-1 sm:p-1 p-1"
              />
              <div className="lg:text-base sm:text-base text-base font-semibold lg:ml-4 sm:ml-2 ml-2">
                Apple Store
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
