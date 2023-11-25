import Research_21 from "./projects/Research_21";
import Research_22 from "./projects/Research_22";
import Research_23 from "./projects/Research_23";
import Research_24 from "./projects/Research_24";
import Research_25 from "./projects/Research_25";

export default function Research_2() {
   return (
      <div class="container-fluid p-0">
         <div class="res_hero">
            <img src="img/project_res21.png" class="d-block w-100" alt="..." />
            <div class="res_hero_text">
               <h2 class="res_hero_title">
                  Applied Research in
               </h2>
               <h2 class="res_hero_title">
                  Healthcare & First Response
               </h2>
            </div>
         </div>

         <Research_21 />
         <Research_22 />
         <Research_23 />
         <Research_24 />
         <Research_25 />

      </div >
   );

}
