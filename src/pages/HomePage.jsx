import React from "react";
import Nav from "../components/Nav/Nav";
import MobileNav from "../components/Nav/MobileNav";
import Features from "../components/features/features/Features";
import BookMarkManger from "../components/bookmarkmanger/BookMarkManger";
import Extensions from "../components/extension/Extensions";
import Footer from "../components/footer/Footer";
import { tabs, extension, pageLinks, faqData } from "../data";
import Email from "../components/email/Email";
import Accordion from "../components/accordion/Accordions";

function HomePage() {
  return (
    <>
      <div className="container">
        <Nav pageLinks={pageLinks} />
        <MobileNav />
        <BookMarkManger />
        <Features tabs={tabs} />
        <Extensions extension={extension} />
        <Accordion faqData={faqData} />
      </div>
      <Email />

      <Footer pageLinks={pageLinks} />
    </>
  );
}

export default HomePage;
