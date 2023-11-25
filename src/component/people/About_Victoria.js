import { Link } from "react-router-dom";

export default function About_Victoria() {
   return (
      <div class="container text-left mt-5">

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-fill"></i></div>
            <h3 class="pt-1 ps-5">Our People </h3>
         </div>

         <div class="row">
            <div class="col-4 text-center p-2 mt-3">
               <img src="./img/people/people-victoria-full.png" class="rounded-2 w-100" />
            </div>
            <div class="col-8 ps-5">
               <h3>Victoria Gevaert, M.Sc</h3>
               <h5>Researcher</h5>

               <p>Victoria Gevaert is a researcher at the Canadian Institute for Safety Wellness and Performance.
                  She has expertise in identifying patterns in data to provide recommendations related
                  to preventative health measures. </p>


               <p>Her previous research projects as a graduate student investigated contaminant levels and
                  sources of exposure in Indigenous communities in the Northwest Territories and Yukon.
                  She is passionate about community-based research, epidemiology and exploring the intersection
                  between environment and human health. She has a strong knowledge foundation of exposure science
                  and study methodology.  </p>

               <h6>Education</h6>
               <p>Victoria holds a BSc in Health Studies with a research specialization and a French minor,
                  as well as an MSc in Public Health Sciences with a designated field in epidemiology and
                  biostatistics, both from the University of Waterloo.</p>

               <h6>Contact</h6>
               <p> <a href="mailto:Vgevaert@conestogac.on.ca">vgevaert@conestogac.on.ca</a></p>
            </div>

         </div>

         <div class="row text-center mt-5 mb-3">
            <Link to="/about_people"><button type="button" class="btn btn-secondary" style={{ width: "10rem" }}>Back</button>
            </Link>
         </div>

      </div>
   );

}