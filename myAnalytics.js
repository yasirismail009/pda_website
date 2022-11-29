import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB-4L-F_MukJ5xKrutZJZGAOKmMtclcPio",
  authDomain: "privacy-defender-website.firebaseapp.com",
  projectId: "privacy-defender-website",
  storageBucket: "privacy-defender-website.appspot.com",
  messagingSenderId: "527854014498",
  appId: "1:527854014498:web:e93076879002f2fac23a7b",
  measurementId: "G-PZC9P6QZJZ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

export const Analytics = analytics.isSupported() ? firebase.analytics() : null;
