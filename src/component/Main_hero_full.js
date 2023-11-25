import { Link } from "react-router-dom";

export default function Main_hero_full() {
   return (
      <div class="container text-center px-3 pt-2 mt-3">
         <div id="carouselExampleIndicators" class="carousel slide">

            <div class="carousel-inner">

               <div class="carousel-item active">
                  <img src="img/hero.png" alt="First_slide" />
                  <div class="carousel-caption d-none d-md-block">
                     <h3>CISWP (Canadian Institute for Safety, Wellness & Performance)</h3>
                     <p>Building capacity for productive and sustainable work <br /><br />
                     </p>
                  </div>
               </div>

            </div>

         </div>

      </div>

   );
}
