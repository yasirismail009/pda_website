import React from "react";
import ContactUs from "../Components/Feedback/ContactUs";
import News from "../Components/News/index";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <News />
      <Footer />
    </div>
  );
}
