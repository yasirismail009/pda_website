import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Splashscreen from "../Components/Splash/splashscreen";
import { useRouter } from "next/router";
// import { initializeApp } from "firebase/app";
// import { getAnalytics, logEvent } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyB-4L-F_MukJ5xKrutZJZGAOKmMtclcPio",
//   authDomain: "privacy-defender-website.firebaseapp.com",
//   projectId: "privacy-defender-website",
//   storageBucket: "privacy-defender-website.appspot.com",
//   messagingSenderId: "527854014498",
//   appId: "1:527854014498:web:e93076879002f2fac23a7b",
//   measurementId: "G-PZC9P6QZJZ",
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Analytics and get a reference to the service
// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return pageLoading === true ? <Splashscreen /> : <Component {...pageProps} />;
}

export default MyApp;
