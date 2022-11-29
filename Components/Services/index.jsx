import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ServiceCard from "./serviceCard";
import { ServicesData } from "../../Store/data";
import clsx from "clsx";

export default function Services() {
  const [isActive, setIsActive] = useState("android");
  const [ServiceData, setServiceData] = useState([]);

  const handleClick = (device) => {
    if (device === "android") {
      setServiceData(ServicesData.android);
      setIsActive("android");
    } else {
      setServiceData(ServicesData.ios);
      setIsActive("ios");
    }
  };
  useEffect(() => {
    setServiceData(ServicesData.android);
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full bg-primary-dark lg:p-24 sm:p-2 p-2"
      id="services"
    >
      <div className="w-60 lg:mb-8 sm:mb-8 mb-8 lg:ml-8  lg:pt-0 sm:pt-16 pt-16">
        <ul className="grid grid-flow-col text-center  bg-primary-card rounded-lg p-1 ">
          <li
            className="cursor-pointer"
            onClick={() => {
              handleClick("android");
            }}
          >
            <p
              className={clsx(
                "cursor-pointer flex justify-center  rounded-lg lg:py-3 sm:py-2 py-2 font-bold",
                isActive === "android"
                  ? "bg-primary-main  text-primary-dark"
                  : "text-primary-main"
              )}
            >
              Android
            </p>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              handleClick("ios");
            }}
          >
            <p
              className={clsx(
                "cursor-pointer flex justify-center  rounded-lg lg:py-3 sm:py-2 py-2 font-bold",
                isActive === "ios"
                  ? "bg-primary-main  text-primary-dark"
                  : "text-primary-main"
              )}
            >
              IOS
            </p>
          </li>
        </ul>
      </div>
      <div>
        <p className="lg:text-4xl sm:text-xl text-xl font-bold text-primary-main lg:ml-8 sm:ml-0 ml-0 lg:mb-8 sm:mb-12 mb-12 ">
          Included Services:
        </p>
        {/* <p className="lg:text-2xl sm:text-base text-base font-medium text-primary-text lg:ml-16 sm:ml-0 ml-0  ">
          Our services are defined by quality and commitment.
        </p> */}
      </div>
      <div className="flex justify-center items-center w-full h-full bg-primary-dark ">
        <Grid container className="w-full items-center  ">
          {ServiceData?.map((val) => (
            <Grid item lg={2} xs={6}>
              <ServiceCard AndroidData={val} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
