import styles from "./About.module.css"
import { Link } from "react-router-dom";


export default function About_people() {
   return (
      <div class="container text-left mt-5">

         <div class="icon-box wow fadeInUp">
            <div class="icon"><i class="bi bi-person-fill"></i></div>
            <h3 class="pt-1 ps-5">Our People  </h3>
         </div>

         <br />

         <h4 class="ps-4">Leadership</h4>

         <div id={styles.ppl_card} class="row">

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/about_Amin"><img src="./img/people/people-amin.png" class="card-img-top" alt="" /></Link>
                  <Link to="/about_Amin" class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>
                        Amin Yazdani, PhD, CSP</div>
                     <div class={styles.cardP_text2}>EXECUTIVE DIRECTOR</div>
                  </div></Link>
               </div>
            </div>

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/about_Marcus"><img src="./img/people/people-marcus.png" class="card-img-top" alt="" /></Link>
                  <Link to="/about_Marcus" class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Marcus Yung, PhD, CPE</div>
                     <div class={styles.cardP_text2}>DIRECTOR</div>
                  </div></Link>
               </div>
            </div>

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/about_Nicki"><img src="./img/people/people-nicki.png" class="card-img-top" alt="" /></Link>
                  <Link to="/about_Nicki" class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Nicki Islic, M.Sc</div>
                     <div class={styles.cardP_text2}>ASSOCIATE DIRECTOR</div>
                  </div></Link>
               </div>
            </div>

         </div >
         <br /><br />

         <h4 class="ps-4">Research Team</h4>

         <div id={styles.ppl_card} class="row">

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/about_Bronson"><img src="./img/people/people-bronson.png" class="card-img-top" alt="" /></Link>
                  <Link to="/about_Bronson" class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Bronson Du, M.Sc.</div>
                     <div class={styles.cardP_text2}>RESEARCHER</div>
                  </div></Link>
               </div>
            </div>

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="about_Kumar"><img src="./img/people/people-kumar.png" class="card-img-top" alt="" /></Link>
                  <Link to="about_Kumar" class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Kumar Soma, M.Sc.</div>
                     <div class={styles.cardP_text2}>RESEARCHER</div>
                  </div></Link>
               </div>
            </div>

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="about_Victoria"><img src="./img/people/people-victoria.png" class="card-img-top" alt="" /></Link>
                  <Link to="about_Victoria" class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Victoria Gevaert, M.Sc</div>
                     <div class={styles.cardP_text2}>RESEARCHER</div>
                  </div></Link>
               </div>
            </div>

         </div>

         <br /><br />

         <h4 class="ps-4">Stakeholder Advisory Committee</h4>

         <br /><br />

      </div >
   );

}
