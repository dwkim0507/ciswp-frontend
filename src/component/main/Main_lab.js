import { Link } from "react-router-dom";


export default function Main_lab() {

   return (
      <div class="container text-left mt-5 ps-5">


         <h3>
            Research Labs
         </h3>

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-arms-up"></i></div>
            <h4 class="title">
               <Link to="/lab_stride">
                  Skilled Trades Research in Inclusivity, Diversity, and Equity <br /> (STRIDE) Laboratory
               </Link></h4>
         </div>

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-palette2"></i></div>
            <h4 class="title">
               <Link to="/lab_start">
                  Skilled Trades Applied Research and Training <br /> (START) Laboratory
               </Link></h4>
         </div>

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-pin-map-fill"></i></div>
            <h4 class="title3">
               <Link to="/lab_field">
                  Field to Lab to Field Research
               </Link></h4>
         </div>

      </div>


   );
}
