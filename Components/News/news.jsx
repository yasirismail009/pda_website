import SecurityNews from "../../Assets/news_feed.svg";
import Image from "next/image";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function News() {
  return (
    <div className="lg:px-24 sm:px-8 px-8 lg:py-8 sm:py-0 py-0 lg:pb-12 sm:pb-12 pb-12 bg-primary-text rounded-xl shadow-inner ">
      <Grid container spacing={2} className="justify-start items-center">
        <Grid item lg={6} xs={12}>
          <div className="w-full flex flex-col lg:justify-start lg:items-start sm:justify-center justify-center sm:items-center items-center ">
            <div>
              <p className="lg:text-4xl sm:text-3xl text-3xl font-bold text-primary-dark  mb-8">
                Security News
              </p>
              <p className="lg:text-2xl sm:text-xl text-xl font-semibold text-primary-dark  mb-4">
                Stay vigilant and remain up to date on latest security news,
                frauds, and threats.
              </p>
              <p className="lg:text-xl sm:text-base text-base font-medium text-primary-dark   mb-8">
                Get latest cyber security news and articles covering the latest
                cyber security threats, breaches, vulnerabilities and frauds
                effecting millions of users worldwide.
              </p>
            </div>
            <Link href="/blogs.html?lead=123">
              <div className=" w-60 flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-8 px-8 lg:py-2  sm:py-2 py-2 lg:mb-0 sm:mb-8 mb-8 text-primary-main bg-primary-dark hover:bg-primary-card   rounded-xl shadow-2xl">
                <p className="lg:text-lg sm:text-base text-base font-semibold">
                  Explore More
                </p>
              </div>
            </Link>
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <div className="flex justify-center items-center lg:px-52 sm:px-4 px-4 ">
            <Image src={SecurityNews} alt="Privacy Lock" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
