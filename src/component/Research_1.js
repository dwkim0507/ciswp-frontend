import Research_11 from "./projects/Research_11";
import Research_12 from "./projects/Research_12";


export default function Research_1() {
   return (
      <div class="container-fluid p-0">

         <div class="res_hero">
            <img src="img/project_res11.png" class="d-block w-100" alt="..." />
            <div class="res_hero_text">
               <h2 class="res_hero_title">
                  Applied Research in
               </h2>
               <h2 class="res_hero_title">
                  Skilled Trade
               </h2>
            </div>
         </div>

         <Research_11 />
         <Research_12 />

      </div >
   );

}
