import '../App.css';
import Navigation from './Navigation';
import About_mission_body from "./about/About_mission_body";
import About_mission_body2 from "./about/About_mission_body2";
import Footer from "./Footer";


export default function Main_mission() {
   return (
      <div>
         <Navigation />
         <br /><br />
         <About_mission_body />
         <br /><br />
         <About_mission_body2 />
         <br />
         <Footer />
      </div >
   );

}
