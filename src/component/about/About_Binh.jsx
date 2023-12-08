import { Link } from "react-router-dom";

export default function About_Binh() {
   return (
      <div class="container text-left mt-5">

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-fill"></i></div>
            <h3 class="pt-1 ps-5">Our People </h3>
         </div>

         <div class="row">
            <div class="col-4 text-center p-2 mt-3">
               <img src="./img/people/people-binh-full.jpg" class="rounded-2 w-100" />
            </div>
            <div class="col-8 ps-5">
               <h3>Binh Ngo, M. Sc., CPE</h3>
               <h5>Research Project Manager</h5>

               <p>
                  Binh has a background in biomechanical research, with expertise in measuring and analyzing
                  muscle activity and joint kinematics, understanding the influence of risk perception of
                  various ergonomic risk factors, and applying research into practice.
                  As a Project Manager at CISWP, he is responsible for overseeing and
                  executing various research projects, and developing effective knowledge
                  dissemination resources to ensure research findings are accessible and
                  can be effectively implemented by organizations.
               </p>


               <p>
                  Previously, as an ergonomic consultant working with Toyota Manufacturing
                  North America, he has been the North American Ergo Lead for multiple
                  Assembly Pilot projects. He has collaborated with designers, engineers,
                  quality control, various analysts, and production members to help design
                  future cars to help mitigate musculoskeletal injury risk for assembly
                  team members.  He also worked on the product development and
                  usability/UI/UX of a web-based risk assessment/prioritization tool.
                  Mr. Ngo obtained his Masters degree in Kinesiology (Biomechanics)
                  from the University of Waterloo and is a U.S.A. Certified Professional
                  Ergonomist (BCPE).
               </p>


               <h6>Education</h6>
               <p>
                  Binh holds a MSc in Kinesiology (Biomechanics) and BSc in Honours Kinesiology,
                  both from University of Waterloo.
               </p>

               <h6>Publications</h6>
               <p>See <a href="https://scholar.google.ca/citations?user=OkSwE4kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"> Google Scholar </a>
                  for a full list of publications.</p>
            </div>

         </div>

         <div class="row text-center mt-5 mb-3">
            <Link to="/people" onClick={() => { window.scroll(0, 0); }}><button type="button" class="btn btn-secondary" style={{ width: "10rem" }}>Back</button>
            </Link>
         </div>

      </div>
   );

}