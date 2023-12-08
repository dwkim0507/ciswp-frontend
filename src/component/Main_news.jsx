import '../App.css';
import Navigation from './Navigation';
import News from "./news/News";
import Footer from "./Footer";


export default function Main_news() {
   return (
      <div>
         <Navigation />
         <br /><br />
         <News />
         <br /><br />
         <Footer />
      </div >
   );

}
