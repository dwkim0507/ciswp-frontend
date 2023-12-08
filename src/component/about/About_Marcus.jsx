import { Link } from "react-router-dom";

export default function About_Marcus() {
   return (
      <div class="container text-left mt-5">

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-fill"></i></div>
            <h3 class="pt-1 ps-5">Our People </h3>
         </div>

         <div class="row">
            <div class="col-4 text-center p-2 mt-3">
               <img src="./img/people/people-marcus-full.png" class="rounded-2 w-100" />
            </div>
            <div class="col-8 ps-5">
               <h3>Marcus Yung, PhD, CPE</h3>
               <h5>Associate director, Research Development and Operations</h5>

               <p>Dr. Yung is the associate director, research development and operations at the Canadian Institute for
                  Safety, Wellness & Performance (CISWP). He has expertise in human factors and ergonomics
                  across multiple sectors, including construction and manufacturing in both Canada
                  and the United States. Dr. Yung’s research focuses on the etiology of work-related
                  musculoskeletal disorders, exposure assessment, and development of prevention strategies
                  and interventions to mitigate injury risk. He has expertise in individual-level measurement
                  using biomechanical and biophysical tools for both laboratory work simulations and field studies.
                  Additionally, Dr. Yung has knowledge in physical exposure estimation using population-level data
                  to construct job exposure matrices that can be used to better understand exposure-disease relationships.
                  His work also includes developing and evaluating risk assessment tools, guidelines,
                  and occupational health standards to prevent musculoskeletal injury risks and improve work performance.</p>


               <p>Prior to joining CISWP, he completed his post-doctoral training at the Canadian Centre for
                  Health & Safety in Agriculture (University of Saskatchewan) as a recipient of a Saskatchewan
                  Health Research Foundation Postdoctoral Fellowship. He was also a post-doctoral research associate
                  at Washington University School of Medicine in St. Louis, Missouri, within the Division of
                  General Medical Sciences. Dr. Yung is a Board-Certified Professional Ergonomist (CPE).</p>


               <h6>Education</h6>
               <p>Dr. Yung holds a PhD in Kinesiology (Work and Health) and an M.Sc. (Kinesiology) from
                  University of Waterloo, and BSc (Biomedical Physiology & Kinesiology)
                  from Simon Fraser University.</p>

               <h6>Publications</h6>
               <p>See <a href="https://scholar.google.ca/citations?user=TF5YVAcAAAAJ&hl=en&oi=ao">Scholar Google</a>
                  and <a href="https://www.researchgate.net/profile/Marcus-Yung">Research Gate</a>Research Gate
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