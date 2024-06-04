import chrome from "./images/logo-chrome.svg";
import firefox from "./images/logo-firefox.svg";
import opra from "./images/logo-opera.svg";
import tab1 from "./images/illustration-features-tab-1.svg";
import tab2 from "./images/illustration-features-tab-2.svg";
import tab3 from "./images/illustration-features-tab-3.svg";
// import logo from "./images/logo-firefox.svg";

export const pageLinks = [
  { id: 1, href: "#home", text: "FEATURES" },
  { id: 2, href: "#about", text: "PRICING" },
  { id: 3, href: "#services", text: "CONTACT" },
];

export const extension = [
  { id: 1, icon: chrome, text: "Add T Chrome", subtext: "Minimum Version 62", },
  {id: 2, icon: firefox, text: "Add to FireFox", subtext: "Minimum Version 55", marginTop:'50px'},
  { id: 3, icon: opra, text: "Add to Opra", subtext: "Minimum Version 46", marginTop:'100px' },
];

export const tabs = [
  {
    id: 1,
    title: " Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: tab1,
    btn: "simple bookmarking",
  },
  {
    id: 2,
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: tab2,
    btn: "Speedy Searching",
  },
  {
    id: 3,
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: tab3,
    btn: "Easy Sharing",
  },
];
