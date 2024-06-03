// import {extension} from './data'
import { extension } from "./data";
// import Nav from "./components/Nav/Nav";
// import MobileNav from "./components/Nav/MobileNav";
import BookMarkManger from "./components/bookmarkmanger/BookMarkManger";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
        
        <HomePage />
      {/* <BookMarkManger /> */}

      {/* {extension.map((link)=>{
      return(
        <div key={link.id}>
        <img src={link.icon}/>
        <p>{link.text}</p>
        <p>{link.subtext}</p>

        </div>
      )
     })} */}
    </>
  );
}

export default App;
