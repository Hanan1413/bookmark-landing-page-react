import React from "react";
import Nav from "../components/Nav/Nav";
import MobileNav from "../components/Nav/MobileNav";
import Features from "../components/features/Features";
import BookMarkManger from "../components/bookmarkmanger/BookMarkManger";
import Extensions from "../components/extension/Extensions";
import Footer from "../components/footer/Footer";
import { tabs, extension, pageLinks } from "../data";

function HomePage() {
  return (
    <>
      <div className="container">
        <MobileNav />
        <Nav pageLinks={pageLinks} />
        {/* <BookMarkManger /> */}
        <Features tabs={tabs} />
        <Extensions extension={extension} />
      </div>
      <Footer pageLinks={pageLinks} />
    </>
  );
}

export default HomePage;
