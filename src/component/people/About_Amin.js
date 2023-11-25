import { Link } from "react-router-dom";

export default function About_Amin() {
   return (
      <div class="container text-left mt-5">

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-fill"></i></div>
            <h3 class="pt-1 ps-5">Our People  </h3>
         </div>

         <div class="row">
            <div class="col-4 text-center p-2 mt-3">
               <img src="./img/people/people-amin-full.png" class="rounded-2 w-100" />
            </div>
            <div class="col-8 ps-5">
               <h3>Amin Yazdani, PhD, CSP</h3>
               <h5>Executive director, Canadian Institute for Safety, Wellness & Performance</h5>

               <p>Dr. Amin Yazdani is the executive director of the Canadian Institute for Safety, Wellness & Performance
                  at Conestoga's School of Business. He is also an adjunct assistant professor at McMaster University,
                  the University of Waterloo and Pacific Coast University for Workplace Health Sciences. Dr.
                  Yazdani is a member of the Canadian Standard Association (CSA Group) Occupational Health
                  and Safety Strategic Steering Committee, and a recipient of the 2018 Standards Council of
                  Canada Young Leader Award.</p>
               <p>Dr. Yazdani uses a multidisciplinary strategy to develop innovative approaches to prevent
                  workplace injuries and work disability at the organizational level.
                  Dr. Yazdani's research interest centres around standardization of human factor and
                  ergonomics in the design of products and work environments by developing best practices and
                  technical standards. In addition, he has extensive experience in collaborating with small,
                  medium and large organizations to implement organizational-wide approaches to prevent
                  workplace injuries and improve productivity and performance.</p>

               <p>In collaboration with industry stakeholders,
                  Dr. Yazdani spearheaded the development of the Canadian Standard for
                  <a href="https://www.csagroup.org/store/product/CSA%20D500:20/">Ergonomic Design for Ambulances
                     and Related Equipment (CSA D500) </a> and
                  <a href="https://www.csagroup.org/store/product/CSA%20Z1011:20/">Work Disability Management System
                     (CSA Z1011:20)</a>.
                  He has also served as a co-chair for the technical committee to develop a Canadian Standard for
                  <a href="https://www.csagroup.org/store/product/2704213/">Career-inclusive and Accommodating
                     Organizations (CSA B701-17)</a>
                  and contributed to the development of
                  several Canadian Standards including the standard for
                  <a href="https://www.csagroup.org/store/product/2701197/">Office Ergonomics (CSA Z412-17)</a>.</p>
               <p>Dr. Yazdani also co-led a multi-stakeholder initiative to develop a new
                  <a href="https://www.msdprevention.com/">MSD Prevention Guide for Ontario</a>.
                  Currently, he is spearheading several important initiatives and serves as the chair of
                  several standards development technical committees including the development of the following
                  Canadian Standards:</p>
               <ul>
                  <li>Fatigue Risk Management Standard for First Responders (CSA Z1615:2022), and</li>
                  <li>Work Disability Prevention Management System for Paramedics (CSA Z1011.1:2022).</li>
               </ul>

               <h6>Education</h6>
               <p>Dr. Yazdani holds a PhD in Kinesiology (Work and Health) from the University of Waterloo,
                  and both an MSc and BSc in Occupational Health and Safety.
                  He is also a Certified Safety Professional.</p>

               <h6>Publications</h6>
               <p>See <a href="https://scholar.google.ca/citations?user=BH_y_EkAAAAJ&hl=en&oi=ao">Scholar Google</a>
                  and <a href="https://www.researchgate.net/profile/Amin-Yazdani">Research Gate</a>Research Gate
                  for a full list of publications.</p>
            </div>

         </div>

         <div class="row text-center mt-5 mb-3">
            <Link to="/about_people"><button type="button" class="btn btn-secondary" style={{ width: "10rem" }}>Back</button></Link>
         </div>

      </div >
   );

}
