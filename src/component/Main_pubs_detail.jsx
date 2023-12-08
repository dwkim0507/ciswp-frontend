import '../App.css';
import { useSearchParams } from "react-router-dom";
import Navigation from './Navigation';
import Pubs_detail from "./pub/Pubs_detail";
import Footer from "./Footer";


export default function Main_pubs_detail() {
   let [params] = useSearchParams();
   const pubId = params.get("id");

   return (
      <div>
         <Navigation />
         <br />
         <Pubs_detail pubId={pubId} />
         <br /><br />
         <Footer />

      </div >
   );

}
