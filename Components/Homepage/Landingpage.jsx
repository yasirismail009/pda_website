import Image from "next/image";

// Import assets
import LandingImg from "../../Assets/Landing_img.png";
import DownloadIcon from "../../Assets/downloads.svg";
import RatingIcon from "../../Assets/ratings.svg";
import LanguageIcon from "../../Assets/languages.svg";
import AppleStoreIcon from "../../Assets/apple_store.svg";
import PlayStoreIcon from "../../Assets/play_store.svg";

export default function LandingPage() {
  return (
    <div id="home" className="w-full mb-40 sm:px-8 px-8">
      <div className="w-full lg:flex md:flex flex-col sm:block block lg:h-screen sm:h-full h-full items-center justify-center lg:mt-2 sm:mt-0 mt-0">
        <div className="w-full flex items-center justify-center lg:mt-16 sm:mt-20 mt-20">
          <Image src={LandingImg} alt="Privacy Defender App" priority />
        </div>
        <p className="lg:text-6xl sm:text-4xl text-4xl font-bold lg:text-left sm:text-center text-center text-primary-dark mb-4 lg:mt-0 sm:mt-8 mt-8">
          All <span className="text-[#ffc200]">security</span> you need in
          <span className="text-[#ffc200]"> one pack</span>
        </p>
        <div className="lg-w-[40%] sm:w-full w-full flex lg:flex-row sm:flex-wrap flex-wrap items-center justify-center">
          <div className="lg:mb-0 sm:mb-4 mb-4">
            <div className="flex flex-row lg:ml-4 sm:ml-0 ml-0">
              <Image src={DownloadIcon} alt="downloads" />
              <p className="text-[#ffc200] lg:text-5xl sm:text-5xl text-5xl font-bold ml-4">
                50K+
              </p>
              <p className="text-primary-dark font-bold lg:text-base sm:text-base text-base mt-4 ml-2">
                Downloads
              </p>
            </div>
          </div>
          <div className="lg:mb-0 sm:mb-0 mb-0">
            <div className="flex flex-row lg:ml-4 sm:ml-0 ml-0">
              <Image src={RatingIcon} alt="downloads" />
              <p className="text-[#ffc200] lg:text-5xl sm:text-2xl text-2xl  font-bold ml-4">
                4.9
              </p>
              <p className="text-primary-dark font-bold lg:text-base sm:text-xs text-xs mt-4 ml-2">
                Rating
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row lg:ml-4 sm:ml-2 ml-2">
              <Image src={LanguageIcon} alt="downloads" />
              <p className="text-[#ffc200] lg:text-5xl sm:text-2xl text-2xl  font-bold ml-4">
                6+
              </p>
              <p className="text-primary-dark font-bold lg:text-base sm:text-xs text-xs mt-4 ml-2">
                Languages
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row sm:flex-col flex-col mt-8  items-center justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.pligence.privacydefender"
            target="_blank"
          >
            <div className="flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-10 sm:px-8 px-8 lg:py-4  sm:py-2 py-2 lg:mb-0 sm:mb-8 mb-8 text-primary-main bg-primary-dark hover:bg-primary-card   rounded-xl shadow-2xl">
              <Image src={PlayStoreIcon} alt="Privacy Defender App" />
              <p className="lg:text-2xl sm:text-base text-base font-semibold ml-4">
                Play Store
              </p>
            </div>
          </a>
          <a
            href="https://apps.apple.com/us/app/privacy-defender/id1588734793"
            target="_blank"
          >
            <div className="flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-10 sm:px-8 px-8 lg:py-4  sm:py-2 py-2 hover:bg-primary-text   rounded-xl shadow-2xl lg:ml-8">
              <Image src={AppleStoreIcon} alt="Privacy Defender App" />
              <p className="lg:text-2xl sm:text-base text-base font-semibold ml-4">
                Apple Store
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
