import styles from "../Research.module.css"

export default function Research_22() {
   return (
      <div class="container text-left">
         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="pt-0 ps-5">
               Towards the Development of the Canadian first responder fatigue risk management standard
            </h4>
         </div>

         <div class={styles.re_info}>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Funding Agency:</span>
               Defense Research and Development Canada (DRDC)
            </div>
            <div class={styles.re_info_detail}>
               Develop an evidence-informed National Standard on First Responder Workplace Fatigue Risk Management
               which will be used across Canada to improve first responder health and wellness
               and will support the collection of consistent, national data that will inform the development
               of a robust and comprehensive Canadian First Responder Information System.
            </div>

            <div class={styles.re_info_detail}>
               Status: Completed
            </div>
         </div>

         <div class="accordion" id="re_22" style={{ width: "90%", margin: "auto" }}>
            <div class="accordion-item">
               <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button"
                     data-bs-toggle="collapse" data-bs-target="#re_22b">
                     Project Description
                  </button>
               </h2>
               <div id="re_22b" class="accordion-collapse collapse"
                  data-bs-parent="re_22">
                  <div class={styles.re_desc_body}>
                     <p>
                        <strong>Key project partners: </strong>
                        Canadian Standards Association (CSA Group), Paramedic Chiefs of Canada (PCC),
                        Paramedic Association of Canada (PAC), County of Renfrew
                     </p>
                     <p>
                        First responders are at high risk of suffering decrements in neurocognitive performance related to fatigue.
                        Such performance decrements endanger not only the personal health and safety of these responders
                        but also the health and safety of their fellow responders and the public they serve.
                        For these reasons, first responders constitute an occupational group that is particularly vulnerable
                        to the effects of fatigue. Managing responder fatigue and mitigating its associated health
                        and safety risks are therefore essential to protect first responder and public health and safety.
                     </p>
                     <p>
                        The objective of this project is to develop an evidence-informed National Standard on First Responder
                        Workplace Fatigue Risk Management which will be used across Canada to improve first responder health
                        and wellness and will support the collection of consistent, national data that will inform
                        the development of a robust and comprehensive Canadian First Responder Information System.
                        This will ultimately advance first responder professions by making accurate data available
                        for research, improved operational practice, informed decision-making and policy development,
                        improved frontline personnel health and safety, and improved patient and community outcomes.
                     </p>
                     <p>
                        The main objective of this study is to develop, promote, and disseminate a nationally
                        applicable Canadian Paramedic Work Disability Prevention Standard and related tools
                        to help prevent and manage work disability, specifically those associated
                        with Operational Stress Injuries.
                     </p>

                     <p>
                        <strong>Conference presentations: </strong> Yung, M., Meyer, R., & Yazdani, A. (2020).
                        Developing a national standard on first responder workplace fatigue risk management.
                        Virtually Fire Rescue Canada 2020 Webinar Series. October 28, 2020.
                     </p>
                     <p>
                        <strong>Project manager:</strong> Marcus Yung, PhD, CPE
                     </p>

                  </div>
               </div>
            </div>
         </div>




      </div >
   );

}
