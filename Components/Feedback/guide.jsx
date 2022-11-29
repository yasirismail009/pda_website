import React from "react";
import ReadMore from "../../Assets/read_more.svg";
import Image from "next/image";
import Link from "next/link";

export default function Guide() {
  return (
    <div className="bg-primary-text lg:w-2/4 sm:w-full w-full p-8 lg:px-20 sm:px-8 px-8  rounded-xl shadow-inner">
      <p className="text-4xl text-primary-dark font-bold mb-8">How To Guide!</p>
      <p className="text-xl text-primary-dark font-bold mb-4">
        {" "}
        Information on different features of Privacy Defender App
      </p>
      <p className="lg:text-xl sm:text-base text-base font-medium text-primary-dark   mb-8">
        Mobile Privacy & Security Protection Suite provides Privacy Assurance,
        Threat Detection, and advanced Intelligent Real-Time protection
        capabilities to the Android and IOS Mobile Users
      </p>
      <Link href="/app_guide">
        <div className="w-60 flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-8 px-8 lg:py-2  sm:py-2 py-2 lg:mb-0 sm:mb-8 mb-8 text-primary-main bg-primary-dark hover:bg-primary-card   rounded-xl shadow-2xl">
          <p className="lg:text-lg sm:text-base text-base font-semibold ml-4">
            Explore More
          </p>
          <Image src={ReadMore} alt="Explore More" className="w-[10%] ml-4" />
        </div>
      </Link>
    </div>
  );
}
