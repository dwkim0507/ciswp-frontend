import { Link } from "react-router-dom";


export default function Main_project() {
   return (
      <div class="container text-left mt-3">

         <h3>Research Projects</h3>

         <div class="main-card">
            <div class="card1">
               <img src="./img/project11.png" class="card-img-top" alt="Skilled Trade" />
               <Link to="/research_1"><div class="card-bodyC">
                  <div class="card-textC pt-3">Skilled Trade</div>
               </div></Link>
               <div class="card-body2">
                  <Link to="/research_1" class="card-text2">LEARN MORE &nbsp; <i class="bi bi-caret-right-fill"></i></Link>
               </div>
            </div>
            <div class="card2">
               <img src="./img/project31.png" class="card-img-top" alt="Healthcare & First Response" />
               <Link to="/about_1"><div class="card-bodyC">
                  <div class="card-textC">Healthcare & <br /> First Response</div>
               </div></Link>
               <div class="card-body2">
                  <Link to="/about_1" class="card-text2">LEARN MORE &nbsp; <i class="bi bi-caret-right-fill"></i></Link>
               </div>
            </div>
            <div class="card3">
               <img src="./img/project21.png" class="card-img-top" alt="Workforce Development" />
               <Link to="/about_1"><div class="card-bodyC">
                  <div class="card-textC">Workforce Development</div>
               </div></Link>
               <div class="card-body2">
                  <Link to="/about_1" class="card-text2">LEARN MORE &nbsp; <i class="bi bi-caret-right-fill"></i></Link>
               </div>
            </div>
            <div class="card4">
               <img src="./img/project41.png" class="card-img-top" alt="EDI & Accessibility" />
               <Link to="/about_1"><div class="card-bodyC" >
                  <div class="card-textC" >EDI & <br /> Accessibility</div>
               </div></Link>
               <div class="card-body2">
                  <Link to="/about_1" class="card-text2">LEARN MORE &nbsp; <i class="bi bi-caret-right-fill"></i></Link>
               </div>
            </div>
         </div>

      </div>




   );
}
