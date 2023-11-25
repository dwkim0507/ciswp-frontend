import styles from "../Research.module.css"

export default function Research_23() {
   return (
      <div class="container text-left">
         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="pt-0 ps-5">
               Towards the Development of the Canadian Standard
               for Paramedic Ground Emergency Response Vehicles and Equipment
            </h4>
         </div>

         <div class={styles.re_info}>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Funding Agency:</span>
               Defense Research and Development Canada (DRDC)
            </div>
            <div class={styles.re_info_detail}>
               Develop a Canadian Standard that specifies minimum human factors/ergonomic design and
               usage requirements for emergency response vehicles and equipment with consideration
               to paramedic and patient safety and infection control.
            </div>

            <div class={styles.re_info_detail}>
               Status: Completed
            </div>
         </div>

         <div class="accordion" id="re_23" style={{ width: "90%", margin: "auto" }}>
            <div class="accordion-item">
               <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button"
                     data-bs-toggle="collapse" data-bs-target="#re_23b">
                     Project Description
                  </button>
               </h2>
               <div id="re_23b" class="accordion-collapse collapse"
                  data-bs-parent="re_23">
                  <div class={styles.re_desc_body}>
                     <p>
                        <strong>Key project partners: </strong>
                        Canadian Standard Associations, Paramedic Association of Canada, Paramedic Chiefs of Canada,
                        Centre of Research Expertise for Prevention of Musculoskeletal Disorders (CRE-MSD),
                        County of Frontenac
                     </p>
                     <p>
                        Strengthening the capacity of the paramedic community through the development of standards pertaining
                        to the design and use of next generation ambulances and equipment is an important issue identified
                        by the paramedic community and scientists. Paramedics are 2.9 times more likely to suffer
                        from injuries that required time away from work, and 13 times more likely to suffer from low back pain
                        when compared to other industries. Considering the complex and dynamic work,
                        the elevated injury rates may not be surprising. For example, the frequent need to extricate
                        and transfer patients on to and off of backboards, stretchers and stair chairs also expose paramedics
                        to human factors/ergonomic (HFE) hazards, such as high forces, awkward postures,
                        and repetitive movements. Although the essential tasks of patient handling, care,
                        and transport cannot be eliminated, the design of the ambulance and its associated equipment,
                        which play a significant role in how paramedics interact with their patients, is modifiable.
                     </p>
                     <p>
                        Since paramedics use the ambulances and equipment that are provided by their employers,
                        they often rely on manufacturers and procurement personnel to consider their interactions
                        with the work system, i.e., core principles of ergonomics, when designing or purchasing products.
                        However, these general principles may not be sufficient because ergonomic guidelines, standards,
                        and research specific to ambulances and paramedic equipment are either not readily accessible
                        or applicable. On the contrary, ambulance and equipment design standards, which are mandated
                        and used as a basis for communicating design requirements, provide limited guidance on HFE principles.
                     </p>
                     <p>
                        The objective of this project is to develop a Canadian Standard that specifies minimum HFE design
                        and usage requirements for emergency response vehicles and equipment with consideration to paramedic
                        and patient safety and infection control.
                     </p>

                     <p>
                        <strong>Main deliverable: </strong>
                        <a class="text-decoration-underline" href="https://www.csagroup.org/store/product/CSA%20D500:20/">
                           Canadian Standard on Ergonomic Design of Ambulances and Related Equipment (CSA D500)</a>
                     </p>

                     <p>
                        <a class="text-decoration-underline" href="img/research23-infographics.pdf">Infographics to support the implementation of CSA D500</a>
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
