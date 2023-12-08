import { Link } from "react-router-dom";

export default function About_Nicki() {
   return (
      <div class="container text-left mt-5">

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-fill"></i></div>
            <h3 class="pt-1 ps-5">Our People  </h3>
         </div>

         <div class="row">
            <div class="col-4 text-center p-2 mt-3">
               <img src="./img/people/people-nicki-full.png" class="rounded-2 w-100" />
            </div>
            <div class="col-8 ps-5">
               <h3>Nicki Islic, M.Sc</h3>
               <h5>Associate Director, Canadian Institute for Safety, Wellness & Performance</h5>

               <p>Nicki Islic is the Associate Director, Strategic Initiatives and Stakeholder Engagement at the
                  Canadian Institute for Safety, Wellness & Performance. Her research passion is in equity,
                  diversity, and inclusion in the workplace.
                  Nicki has over 20 years of experience in evidence-informed national and international
                  standards development and multi-stakeholder engagement. In her work, she works closely
                  with diverse stakeholders including all levels of government, researchers, standards
                  development organizations, industry, small and large employers, workers, and persons with
                  lived experience.</p>

            </div>

         </div>

         <div class="row text-center mt-5 mb-3">
            <Link to="/people" onClick={() => { window.scroll(0, 0); }}><button type="button" class="btn btn-secondary" style={{ width: "10rem" }}>Back</button></Link>
         </div>

      </div >
   );

}
