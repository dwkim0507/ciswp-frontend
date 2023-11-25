import styles from "../Research.module.css"

export default function Research_25() {
   return (
      <div class="container text-left">

         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="pt-0 ps-5">
               Empowering the Frontline Workforce to Combat COVID-19: Infrastructure to Cultivate a Community
               of Practice
            </h4>
         </div>

         <div class={styles.re_info}>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Funding Agency:</span>
               Canada Foundation for Innovation (CFI)
            </div>
            <div class={styles.re_info_detail}>
               Reduce the impact of COVID-19 on the Canadian workforce and support the sustainability
               of Canadian businesses through cultivating a community of practice between key stakeholders.

            </div>

            <div class={styles.re_info_detail}>
               Status: Completed
            </div>
         </div>


         <div class="accordion" id="re_25" style={{ width: "90%", margin: "auto" }}>
            <div class="accordion-item">
               <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button"
                     data-bs-toggle="collapse" data-bs-target="#re_25b">
                     Project Description
                  </button>
               </h2>
               <div id="re_25b" class="accordion-collapse collapse"
                  data-bs-parent="re_25">
                  <div class={styles.re_desc_body}>
                     <p>
                        The COVID-19 pandemic has been a significant stressor for the Canadian workforce and businesses.
                        Recent studies revealed that there are limited harmonized and evidence- informed tools, guidelines,
                        and resources to support Canadian’s organizations in protecting the physical
                        and mental health of their workforce during public health crises. The focus of this project is
                        to reduce the impact of COVID-19 on the Canadian workforce and support the sustainability
                        of Canadian businesses through cultivating a community of practice between key stakeholders.
                     </p>
                     <p>
                        The CFI infrastructure includes an interactive communication system to collaborate and engage
                        with a nation-wide audience of researchers, policy makers, employers, employees, unions,
                        professional associations, and other end-users, to develop, evaluate, and disseminate research.
                        The CFI infrastructure will enable us to foster a community of practice to conduct
                        and transfer knowledge from several research projects spearheaded by the Canadian Institute
                        for Safety, Wellness, & Performance (CISWP) and Conestoga College.
                     </p>


                  </div>
               </div>
            </div>
         </div>




      </div >
   );

}
