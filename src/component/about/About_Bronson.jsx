import { Link } from "react-router-dom";

export default function About_Bronson() {
   return (
      <div class="container text-left mt-5">

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-fill"></i></div>
            <h3 class="pt-1 ps-5">Our People </h3>
         </div>

         <div class="row">
            <div class="col-4 text-center p-2 mt-3">
               <img src="./img/people/people-bronson-full.png" class="rounded-2 w-100" />
            </div>
            <div class="col-8 ps-5">
               <h3>Bronson Du, M.Sc.</h3>
               <h5>Researcher</h5>

               <p>Bronson Du is a researcher at the Canadian Institute for Safety, Wellness & Performance (CISWP).
                  Mr. Du has expertise in developing organizational-level guidelines and resources for
                  the prevention and management of work disability and in integrating human factors and
                  ergonomic principles into industry-specific design standards. He applies a systems approach for
                  data collection, analysis, interpretation, and reporting to inform the development of
                  workplace interventions.</p>


               <p>Previously, Mr. Du led multiple complex field studies in collaboration with seat manufacturers
                  and trucking companies in Washington State, Connecticut, British Columbia, Alberta and Manitoba.
                  This research compared whole-body vibration characteristics and attenuation capabilities of
                  seating technologies, and their impact on driver fatigue and discomfort to provide procurement
                  recommendations. Mr. Du has extensive experience in coordinating large-scale applied research projects
                  and utilizes his talents to coordinate and lead a team of research assistants.</p>


               <h6>Education</h6>
               <p>Mr. Du holds a MSc in Public Health and Health Systems and BSc in Honours Kinesiology,
                  both from University of Waterloo</p>

               <h6>Publications</h6>
               <p>See <a href="https://scholar.google.com/citations?user=bwUZpH4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Scholar Google </a>
                  and <a href="https://www.researchgate.net/profile/Bronson-Du" target="_blank" rel="noopener noreferrer">Research Gate </a>
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