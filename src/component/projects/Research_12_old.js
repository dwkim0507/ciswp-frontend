import styles from "../Research.module.css"

export default function Research_12() {
   return (
      <div class="container text-left">
         <div class="row">
            <div class="col">

               <div class={styles.re_info}>
                  <h5>Improving worker health and performance in construction:
                     implementation and adoption of advanced technologies</h5>
                  <ul>
                     <li>Facilitating capacity to improve adoption and implementation of Assistive
                        Technology in the construction industry to mitigate risk of injury
                        while increasing workforce sustainability.</li>
                     <li>Funding Agency: Social Sciences and Humanities Research Council (SSHRC)
                        through Natural Sciences and Engineering Research Council of Canada (NSERC)
                        College and Community Social Innovation Fund (CCSIF)
                     </li>
                     <li>
                        Status: Ongoing (2021-2024)
                     </li>
                  </ul>
               </div>

               <div class="accordion" id="re_12" style={{ width: "90%", margin: "auto" }}>
                  <div class="accordion-item">
                     <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button"
                           data-bs-toggle="collapse" data-bs-target="#re_12b">
                           Project Description
                        </button>
                     </h2>
                     <div id="re_12b" class="accordion-collapse collapse"
                        data-bs-parent="re_12">
                        <div class={styles.re_desc_body}>
                           <p>
                              <strong>Key project partners: </strong>
                              Private Sector Businesses and Employer Groups [Cesaroni Contracting Inc., Clifford Masonary Ltd.,, Melloul-Blamey Construction Inc.], Labour Unions and Trades Associations [Labourer’s International Union of North America (LiUNA) Local 183, Electrical Contractors Association of Ontario (ECAO), Brick and Allied Craft Union (BACU) Local 5, Ontario Formwork Association (OFA), United Association Local 46], Health and Safety Associations [Infrastructure Health and Safety Association (IHSA)]
                           </p>
                           <p>
                              Canada is experiencing a dramatic shift in its workforce demographic as Canadians are living longer and delaying retirement. Sustaining a rapidly aging workforce is a concern for Ontario's construction industry, which faces two challenges: a) the number of older workers is increasing faster than many other industries and b) construction workers experience a greater risk of injury and disability and the risk of recurring injury is high. Construction injuries are among the most costly across all industries in Ontario. Without intervention, in Ontario alone, the construction industry expects a significant shortage of skilled workers over the next decade. As such, the community has an immediate need to prolong the working life of the aging construction workforce. A promising solution to reducing injury risk is the emerging use of commercially available assistive technologies (AT). Although AT has the potential to be valuable for older workers performing demanding tasks, they are not readily adopted in the construction sector. AT are more likely to be adopted by construction organizations and their workers if they demonstrate advantages such as increased productivity and improved work quality but are less likely to be adopted if they are perceived to be costly. Therefore, providing empirical evidence to support decision making of AT is recognized as an important initiative for its adoption.</p>
                           <p>
                              Working with our partners in all facets of this research project, we will develop a decision-making toolkit (e.g., Tool Picker and Cost-Benefit Analysis Calculator) for AT that will benefit our partners by: a) reducing the costs of injury claims and lost days by reducing the risk of worker injuries; b) sustaining their older workforce thereby reducing employee shortages and leveraging the skillset of older and experienced workers to help mentor new employees; and c) improving worker productivity by augmenting worker capability to keep these organizations competitive.</p>
                           <p>
                              <strong>PI:</strong> Amin Yazdani, PhD, CSP
                           </p>
                           <p>
                              <strong>CO-PI:</strong> Marcus Yung, PhD, CPE; Kenrick Jordan, PhD
                           </p>
                           <p>
                              <strong>Research team:</strong> Bronson Du, MSc; Kumar Somasundram, MSc; Daniel Fournier, MSc</p>

                        </div>
                     </div>
                  </div>
               </div>

            </div>

         </div>

      </div >
   );

}
