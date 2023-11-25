import { Link } from "react-router-dom";

export default function About_Kumar() {
   return (
      <div class="container text-left mt-5">

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-fill"></i></div>
            <h3 class="pt-1 ps-5">Our People </h3>
         </div>

         <div class="row">
            <div class="col-4 text-center p-2 mt-3">
               <img src="./img/people/people-kumar-full.png" class="rounded-2 w-100" />
            </div>
            <div class="col-8 ps-5">
               <h3>Kumar Soma, M.Sc.</h3>
               <h5>Researcher</h5>

               <p>Kumar Soma is a researcher at the Canadian Institute for Safety, Wellness & Performance (CISWP).
                  He has expertise in ergonomics and upper extremity biomechanics. His research interests focus
                  on understanding the mechanisms of work-related musculoskeletal disorders and creating strategies
                  to reduce risk of injuries.</p>


               <p>Previously, Mr. Soma’s research examined the mechanisms of involuntary finger movements
                  during voluntary finger exertions in various wrist and finger postures.
                  He also assisted researchers in studies focusing on upper extremity fatigue.
                  Additionally, he developed laboratory activities and taught undergraduate students
                  how to use ergonomic assessment tools.</p>

               <p>Prior to joining CISWP, Mr. Soma was the director of Research & Ergonomics at SORD Academy.
                  He delivered research-backed ergonomic workshops and consultations to help office workers
                  overcome physical discomfort and cognitive stress.</p>

               <h6>Education</h6>
               <p>Mr. Soma holds an MSc in Kinesiology (Occupational Biomechanics)
                  and BSc in Honours Kinesiology, both from McMaster University.</p>

               <h6>Contact</h6>
               <p> <a href="mailto:ksomasundram@conestogac.on.ca">ksomasundram@conestogac.on.ca</a></p>
            </div>

         </div>

         <div class="row text-center mt-5 mb-3">
            <Link to="/about_people"><button type="button" class="btn btn-secondary" style={{ width: "10rem" }}>Back</button>
            </Link>
         </div>

      </div>
   );

}