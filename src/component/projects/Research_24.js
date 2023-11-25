import styles from "../Research.module.css"

export default function Research_24() {
   return (
      <div class="container text-left">

         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="pt-0 ps-5">
               Rapid Guideline to Address the Mental Health Impact of COVID-19 Among Canadian Paramedics
            </h4>
         </div>

         <div class={styles.re_info}>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Funding Agency:</span>
               Natural Sciences and Engineering Research Council of Canada (NSERC)
            </div>
            <div class={styles.re_info_detail}>
               Rapidly mobilize solutions and expertise to develop a rapid guideline for the paramedic community
               to prevent and manage mental health injuries during and after the COVID-19 pandemic.
            </div>

            <div class={styles.re_info_detail}>
               Status: Completed
            </div>
         </div>


         <div class="accordion" id="re_24" style={{ width: "90%", margin: "auto" }}>
            <div class="accordion-item">
               <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button"
                     data-bs-toggle="collapse" data-bs-target="#re_24b">
                     Project Description
                  </button>
               </h2>
               <div id="re_24b" class="accordion-collapse collapse"
                  data-bs-parent="re_24">
                  <div class={styles.re_desc_body}>
                     <p>
                        <strong>Key project partners: </strong>
                        CSA Group, Paramedic Association of Canada, Paramedic Chiefs of Canada, Public Services Health
                        and Safety Association, County of Renfrew Paramedic Service, Alberta Health Services,
                        and OPSEU Local 277 Peel Paramedics
                     </p>
                     <p>
                        COVID-19 was declared a global pandemic on March 11, 2020 by the World Health Organization.
                        For millions of Canadians, the COVID-19 pandemic has changed the way people live, work,
                        and interact within their communities. Frontline healthcare workers, such as paramedics,
                        have risen to the challenge, playing a vital role in maintaining public health and safety,
                        and responding to calls, in the face of the COVID-19 health crisis. Paramedics, however,
                        are a high-risk worker group for developing mental health injuries due to a unique set of stressors.
                        Paramedic service organizations have expressed their concern that the COVID-19 pandemic will be
                        an additional significant stressor for their frontline staff, further increasing the prevalence
                        and severity of mental health injuries. They may also face challenges with staffing a
                        nd service capacity because of absenteeism due to illness, quarantine, anxiety,
                        concern over personal safety or safety of family members, or poorly equipped safety measures.
                        Hence, effective prevention and management of mental health injuries require
                        that paramedic service organizations apply harmonized and evidence-informed tools and guidelines
                        to support their staff during a public health crisis. However, these tools and guidelines are absent,
                        and are highly desired to support the mental health and wellness of paramedics,
                        and ultimately to support the capacity required in maintaining the health and safety of the public they serve.
                     </p>
                     <p>
                        This project aims to rapidly mobilize solutions and expertise to develop a rapid guideline
                        for the paramedic community to prevent and manage mental health injuries during and
                        after the COVID-19 pandemic. The guideline will be a great tool for paramedic community
                        to prepare for future public health crises.
                     </p>

                     <p>
                        <strong>Project manager:</strong>  Bronson Du, MSc
                     </p>

                  </div>
               </div>
            </div>
         </div>




      </div >
   );

}
