import styles from "../Research.module.css"

export default function Research_21() {
   return (
      <div class="container text-left">

         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="pt-0 ps-5">
               Towards the Development of the Canadian Work Disability Prevention Management System Standard
               for Paramedics
            </h4>
         </div>

         <div class={styles.re_info}>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Funding Agency:</span>
               Defense Research and Development Canada (DRDC)
            </div>
            <div class={styles.re_info_detail}>
               Develop, promote, and disseminate a nationally applicable Canadian Paramedic Work
               Disability Prevention Standard and related tools to help prevent and manage work disability,
               specifically those associated with Operational Stress Injuries.
            </div>

            <div class={styles.re_info_detail}>
               Status: Completed
            </div>
         </div>

         <div class="accordion" id="re_21" style={{ width: "90%", margin: "auto" }}>
            <div class="accordion-item">
               <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button"
                     data-bs-toggle="collapse" data-bs-target="#re_21b">
                     Project Description
                  </button>
               </h2>
               <div id="re_21b" class="accordion-collapse collapse"
                  data-bs-parent="re_21">
                  <div class={styles.re_desc_body}>
                     <p>
                        <strong>Key project partners: </strong>
                        Canadian Standard Associations (CSA), Centre for Research on Work Disability Policy (CRWDP),
                        Paramedic Association of Canada (PAC), Paramedic Chiefs of Canada (PCC),
                        County of Renfrew
                     </p>
                     <p>
                        The prevention and management of work disability is a significant challenge for paramedic services.
                        It also has an impact beyond the workplace – affecting individuals outside of work, families,
                        and communities. As a result, development of paramedic health and wellness standards is listed
                        as a priority in the Paramedics Association of Canada (PAC) 2016-2018 Strategic Plan.
                     </p>
                     <p>
                        Work disability prevention and management is often dealt with reactively and differently
                        in each paramedic organization. Since work disability prevention and management is not integrated
                        within management systems, and not systematized across the paramedic community,
                        it can be very resource intensive and not as effective as it could be. Therefore,
                        developing an evidence-informed and unified/standardized approach will fill a critical gap.
                        It will enable the collection of consistent data for continuous improvement and ongoing/future research.
                        In addition, the Standard has the potential and capacity to address a wide range of disabilities,
                        including physical disabilities such as those caused by musculoskeletal disorders.
                     </p>
                     <p>
                        The main objective of this study is to develop, promote, and disseminate a nationally
                        applicable Canadian Paramedic Work Disability Prevention Standard and related tools
                        to help prevent and manage work disability, specifically those associated
                        with Operational Stress Injuries.
                     </p>

                     <p>
                        Du, B., Yung, M., Gruber, J., Tompa, E., & Yazdani, A. (2020). Prevention & Management of PTSI in Paramedic Service Organizations: An Environmental Scan of Recommended Programs and Practices. Canadian Institute for Safety, Wellness, & Performance (CISWP). Kitchener, ON.
                     </p>
                     <p>
                        <strong>Project manager:</strong> Bronson Du, MSc
                     </p>

                  </div>
               </div>
            </div>
         </div>


      </div >
   );

}
