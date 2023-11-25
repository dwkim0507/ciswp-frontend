import styles from "../Research.module.css"

export default function Research_11() {
   return (
      <div class="container text-left">

         <div class={styles.re_info}>
            <h5>Skilled Trades Research, InnoVation, and Education in Occupational Safety
               and Health (STRIVE OSH)</h5>
            <ul>
               <li>Improving Canadian and Ontario skilled-trade businesses' success and
                  competitiveness by directly addressing workforce
                  challenges and preventing workplace injuries and disabilities.</li>
               <li>
                  Funding Agency: Ministry of Labour, Immigration,
                  Training and Skills Development (MLITSD)
               </li>
               <li>
                  Status: Ongoing (2021-2024)
               </li>
            </ul>
         </div>

         <div class="accordion" id="re_11" style={{ width: "90%", margin: "auto" }}>
            <div class="accordion-item">
               <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button"
                     data-bs-toggle="collapse" data-bs-target="#re_11b">
                     Project Description
                  </button>
               </h2>
               <div id="re_11b" class="accordion-collapse collapse"
                  data-bs-parent="re_11">
                  <div class={styles.re_desc_body}>
                     <p>
                        <strong>Key project partners: </strong>
                        Private Sector Businesses and Employer Groups
                        [BrandSafway, Ontario Power Generation (OPG),
                        Business Council on Occupational Health and Safety (BCOHS),
                        Melloul-Blamey Construction Inc.], Labour Unions
                        and Trades Associations [Labourer’s International Union of
                        North America (LiUNA) Local 506 Training Centre, United Brotherhood of
                        Carpenters (UBC) Local 2222, Wood Manufacturing Council,
                        Skills Ontario], Health and Safety Associations [Workplace Safety
                        and Prevention Services (WSPS), Infrastructure Health and Safety
                        Association (IHSA)]
                     </p>
                     <p>
                        CISWP’s goal is to improve the success and competitiveness of Canadian and Ontario skilled-trade businesses, by directly addressing workforce challenges and preventing workplace injuries and disabilities. There are three pressing needs of the skilled trades industry: a) sustaining the rapidly aging workforce, b) reducing the risk of worker injury, and c) improving job accessibility for underrepresented groups such as women, people with disabilities, newcomers to Canada, and Indigenous peoples. The outcomes of this work will have direct economic and societal impacts for Ontario, will train the next generation of skilled trade workers in the province, and will help industries (particularly small- and medium-sized enterprises) build capacity and assist in promoting business innovation and commercialization.
                     </p>
                     <p>
                        This project consists of nine interlinked research projects across three themes: a) build capacity of the current and next generation of the skilled trades workforce, b) develop and innovate tools, guidelines, and best practices through applied research, and c) knowledge and technology exchange and exploitation.
                     </p>
                     <p>
                        <strong>PI:</strong> Amin Yazdani, PhD, CSP
                     </p>
                     <p>
                        <strong>CO-PI:</strong> Marcus Yung, PhD, CPE
                     </p>
                     <p>
                        <strong>Research team:</strong> Bronson Du, MSc; Kumar Somasundram, MSc; Daniel Fournier, MSc
                     </p>

                  </div>
               </div>
            </div>
         </div>




      </div >
   );

}
