import Fade from "react-reveal/Fade";
import Image from "next/image";

// Import assets
import DownloadIcon from "../../Assets/downloads.svg";
import RatingIcon from "../../Assets/ratings.svg";
import LanguageIcon from "../../Assets/languages.svg";
import AppleStoreWhiteIcon from "../../Assets/apple_store_white.svg";
import AppleStoreIcon from "../../Assets/apple_store.svg";
import PlayStoreIcon from "../../Assets/play_store.svg";
import PlayStoreWhiteIcon from "../../Assets/play_store_white.svg";
import clsx from "clsx";
import { ButtonClickFunction } from "../Analytics/AnalyticsFunction";

export default function LandingDetails(props) {
  const MapData = props.MapData;
  const id = props.id;
  return (
    <div
      id="features"
      className={clsx(
        "w-full lg:mb-0  sm:px-4 px-4 lg:rounded-2xl sm:rounded-none rounded-none pt-8",
        MapData.theme === "light"
          ? "bg-primary-main text-primary-dark"
          : "bg-primary-dark text-primary-main"
      )}
    >
      <div className="w-full lg:flex md:flex flex-col sm:block block lg:h-screen sm:h-full h-full items-center justify-center lg:mt-0 sm:mt-0 mt-0 ">
        <Fade bottom cascade>
          <div className="lg:text-5xl sm:text-2xl text-2xl font-bold lg:text-left sm:text-center text-center mb-4 lg:mt-32 sm:mt-8 mt-8">
            {MapData?.first}{" "}
            <span className="text-[#ffc200]"> {MapData?.sec}</span>
            {MapData?.third}
            <span className="text-[#ffc200]"> {MapData?.fourth}</span>
          </div>
          <div className="lg-w-[40%] sm:w-full w-full flex lg:flex-row sm:flex-wrap flex-wrap items-center justify-center ">
            <div className="lg:mb-0 sm:mb-4 mb-4">
              <div className="flex flex-row lg:ml-4 sm:ml-0 ml-0">
                <Image src={DownloadIcon} alt="downloads" />
                <p className="text-[#ffc200] lg:text-4xl sm:text-2xl text-2xl font-bold lg:ml-4 sm:ml-2 ml-2">
                  50K+
                </p>
                <p className=" font-bold lg:text-base sm:text-xs text-xs mt-4 lg:ml-2 sm:ml-1 ml-1">
                  Downloads
                </p>
              </div>
            </div>
            <div className="lg:mb-0 sm:mb-2 mb-2 lg:ml-0 sm:ml-2 ml-2">
              <div className="flex flex-row lg:ml-4 sm:ml-0 ml-0">
                <Image src={RatingIcon} alt="downloads" />
                <p className="text-[#ffc200] lg:text-4xl sm:text-2xl text-2xl  font-bold ml-4">
                  4.8
                </p>
                <p className=" font-bold lg:text-base sm:text-xs text-xs mt-4 ml-2">
                  Rating
                </p>
              </div>
            </div>
            {id === "android" ? (
              <div>
                <div className="flex flex-row lg:ml-4 sm:ml-2 ml-2">
                  <Image src={LanguageIcon} alt="downloads" />
                  <p className="text-[#ffc200] lg:text-4xl sm:text-2xl text-2xl  font-bold ml-4">
                    6+
                  </p>
                  <p className=" font-bold lg:text-base sm:text-xs text-xs mt-4 ml-2">
                    Languages
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex flex-row justify-center items-center my-8   lg:mr-8">
            {id === "android" ? (
              <a
                href="https://play.google.com/store/apps/details?id=com.pligence.privacydefender"
                target="_blank"
              >
                <div
                  className={clsx(
                    "flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-5 px-5 lg:py-2  sm:py-1 py-1    rounded-xl shadow-2xl",
                    MapData.theme === "light"
                      ? "text-primary-main bg-primary-dark hover:bg-primary-card"
                      : "text-primary-dark bg-primary-main hover:bg-primary-text"
                  )}
                  onClick={(e) => {
                    ButtonClickFunction("features_playstore_button_clicked");
                  }}
                >
                  <Image
                    src={
                      MapData.theme === "light"
                        ? PlayStoreIcon
                        : PlayStoreWhiteIcon
                    }
                    alt="Privacy Defender App"
                    className="lg:p-1 sm:p-1 p-1"
                  />
                  <p className="lg:text-base sm:text-base text-base font-semibold ml-4">
                    Play Store
                  </p>
                </div>
              </a>
            ) : (
              <a
                href="https://apps.apple.com/us/app/privacy-defender/id1588734793"
                target="_blank"
              >
                <div
                  className={clsx(
                    "flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-5 px-5 lg:py-2  sm:py-1 py-1   rounded-xl shadow-2xl",
                    MapData.theme === "light"
                      ? "text-primary-main bg-primary-dark hover:bg-primary-card"
                      : "text-primary-dark bg-primary-main hover:bg-primary-text"
                  )}
                  onClick={(e) => {
                    ButtonClickFunction("features_applestore_button_clicked");
                  }}
                >
                  <Image
                    src={
                      MapData.theme === "light"
                        ? AppleStoreWhiteIcon
                        : AppleStoreIcon
                    }
                    alt="Privacy Defender App"
                    className="lg:p-1 sm:p-1 p-1"
                  />
                  <p className="lg:text-base sm:text-base text-base font-semibold ml-4">
                    Apple Store
                  </p>
                </div>
              </a>
            )}
          </div>
          <div className="w-full flex items-center justify-center lg:pt-8">
            <Image src={MapData?.img} alt="Privacy Defender App" priority />
          </div>
        </Fade>
      </div>
    </div>
  );
}
