import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/Bg.module.css";

// Assets import
import PdaLogo from "../../Assets/pda_white.svg";
import PligenceLogo from "../../Assets/pligence_white.svg";
// width: 100%;
// position: fixed;
// top: 0;
// z-index: 999;
// background-color: #fff;
export default function BlogNavbar() {
  const router = useRouter();

  return (
    <div
      className=" hidden w-full fixed top-0 sm:flex justify-center items-center  py-4 z-[999] bg-primary-dark"
      position="static"
    >
      <Toolbar className="w-3/4">
        <Grid
          container
          spacing={8}
          className="w-full items-center justify-between "
        >
          <Grid item lg={4} xs={7} className="w-full">
            <Link href="/">
              <Image src={PdaLogo} alt="Privacy Defender App" width="250" />
            </Link>
          </Grid>

          <Grid
            item
            lg={6}
            xs={0}
            className="w-full flex  justify-end items-center p-0"
          >
            <Link href="/">
              <p className="cursor-pointer font-bold lg:text-base md:text-base  lg:block  sm:hidden hidden text-white mr-20">
                Home
              </p>
            </Link>
            {router.pathname === "/" ? (
              <Link href="/app_guide">
                <p className="cursor-pointer lg:text-base md:text-base  font-bold lg:block  sm:hidden hidden text-white">
                  App Guide
                </p>
              </Link>
            ) : router.pathname === "/app_guide" ? null : (
              <Link href="/app_guide">
                <p className="cursor-pointer lg:text-base md:text-base  font-bold lg:block  sm:hidden hidden text-white">
                  App Guide
                </p>
              </Link>
            )}
          </Grid>
          <Grid item lg={2} xs={0}>
            <div className="w-full flex justify-center">
              <a href="https://pligence.com/" target="blank">
                <Image
                  src={PligenceLogo}
                  alt="Pligence"
                  className="lg:block  sm:hidden hidden"
                />
              </a>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}
