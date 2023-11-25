import styles from "../Research.module.css"

export default function Research_12() {
   return (
      <div class="container text-left">
         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="pt-0 ps-5">Improving Worker Health and Performance
               in Construction: Implementation and
               Adoption of Advanced Technologies
            </h4>
         </div>
         <div class={styles.re_info}>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Funding Agency:</span> Social Sciences and Humanities Research Council
               (SSHRC) through Natural Sciences and Engineering Research Council
               of Canada (NSERC) College and Community Social Innovation Fund
               (CCSIF)
            </div>
            <div class={styles.re_info_detail}>
               Canada is experiencing a dramatic shift in its workforce demographic as Canadians
               live longer and delay retirement. Construction injuries are among the most costly
               across all industries in Ontario. Without intervention, the construction sector expects
               a significant shortage of skilled workers over the next decade.
            </div>
            <div class={styles.re_info_detail}>
               Status: Ongoing (2021-2024)
            </div>
         </div>
         <div class="accordion" id="re_12" style={{ width: "90%", margin: "auto" }}>
            <div class="accordion-item">
               <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button"
                     data-bs-toggle="collapse" data-bs-target="#re_12b">
                     Learn more
                  </button>
               </h2>
               <div id="re_12b" class="accordion-collapse collapse"
                  data-bs-parent="re_11">
                  <div class={styles.re_desc_body}>
                     <div class={styles.re_info_detail}>
                        Sustaining a rapidly aging workforce is a concern for Canada's construction industry,
                        which faces two challenges:
                     </div>
                     <ol class={styles.re_info_detail}>
                        <li>The number of older workers is increasing faster than many other
                           industries.
                        </li>
                        <li>Construction workers experience a greater risk of injury and
                           disability, and the risk of recurring injury is high.
                        </li>

                     </ol>
                     <div class={styles.re_info_detail}>
                        A promising solution to reducing injury risk is the emerging use of commercially
                        available assistive technologies, such as exoskeletons. Although exoskeletons have
                        the potential to be valuable for older workers performing demanding tasks, they are
                        not readily adopted in the construction sector.
                     </div>

                     <div class={styles.re_info_detail}>
                        Exoskeletons are more likely to be adopted by construction organizations and their
                        workers if they demonstrate advantages such as increased productivity and
                        improved work quality but are less likely to be adopted if they are perceived to be
                        costly. Therefore, providing empirical evidence to support the decision-making of
                        exoskeletons is recognized as an important initiative for its adoption.
                     </div>

                     <div class={styles.re_info_detail}>
                        CISWP is developing a decision-making toolkit for exoskeletons. This toolkit will
                        benefit our partners by: a) reducing the costs of injury claims and lost days by
                        reducing the risk of worker injuries; b) sustaining their older workforce, thereby
                        reducing employee shortages and leveraging the skillset and experience of older
                        workers to help mentor new employees; and c) improving worker productivity by
                        augmenting their capabilities to keep organizations competitive.
                     </div>

                  </div>
               </div>
            </div>
         </div>




      </div >
   );

}
