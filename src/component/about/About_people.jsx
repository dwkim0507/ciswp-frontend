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
                  <Link to="/amin" onClick={() => { window.scroll(0, 0); }}><img src="./img/people/amin.png" class="card-img-top" alt="" /></Link>
                  <Link to="/amin" onClick={() => { window.scroll(0, 0); }} class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>
                        Amin Yazdani, PhD, CSP</div>
                     <div class={styles.cardP_text2}>Executive Director</div>
                  </div></Link>
               </div>
            </div>

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/marcus" onClick={() => { window.scroll(0, 0); }}><img src="./img/people/marcus.png" class="card-img-top" alt="" /></Link>
                  <Link to="/marcus" onClick={() => { window.scroll(0, 0); }} class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Marcus Yung, PhD, CPE</div>
                     <div class={styles.cardP_text2}>Director</div>
                  </div></Link>
               </div>
            </div>

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/nicki" onClick={() => { window.scroll(0, 0); }}><img src="./img/people/nicki.png" class="card-img-top" alt="" /></Link>
                  <Link to="/nicki" onClick={() => { window.scroll(0, 0); }} class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Nicki Islic, M.Sc</div>
                     <div class={styles.cardP_text2}>Associate Director</div>
                  </div></Link>
               </div>
            </div>


         </div >
         <br /><br />

         <h4 class="ps-4">Research Team</h4>

         <div id={styles.ppl_card} class="row">

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/bronson" onClick={() => { window.scroll(0, 0); }}><img src="./img/people/bronson.png" class="card-img-top" alt="" /></Link>
                  <Link to="/bronson" onClick={() => { window.scroll(0, 0); }} class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Bronson Du, M.Sc.</div>
                     <div class={styles.cardP_text2}>Researcher</div>
                  </div></Link>
               </div>
            </div>

            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/kumar" onClick={() => { window.scroll(0, 0); }}><img src="./img/people/kumar.png" class="card-img-top" alt="" /></Link>
                  <Link to="/kumar" onClick={() => { window.scroll(0, 0); }} class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Kumar Soma, M.Sc.</div>
                     <div class={styles.cardP_text2}>Laboratory Manager</div>
                  </div></Link>
               </div>
            </div>
            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/binh" onClick={() => { window.scroll(0, 0); }}><img src="./img/people/binh.png" class="card-img-top" alt="" /></Link>
                  <Link to="/binh" onClick={() => { window.scroll(0, 0); }} class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Binh Ngo, M.Sc., CPE</div>
                     <div class={styles.cardP_text2}>Research Project Manager</div>
                  </div></Link>
               </div>
            </div>
            <div class="col">
               <div class={styles.cardP}>
                  <Link to="/victoria" onClick={() => { window.scroll(0, 0); }}><img src="./img/people/victoria.png" class="card-img-top" alt="" /></Link>
                  <Link to="/victoria" onClick={() => { window.scroll(0, 0); }} class="text-decoration-none"><div class={styles.cardP_body}>
                     <div class={styles.cardP_text}>Victoria Gevaert, M.Sc</div>
                     <div class={styles.cardP_text2}>Researcher</div>
                  </div></Link>
               </div>
            </div>

         </div>

         <br /><br />

      </div >
   );

}
