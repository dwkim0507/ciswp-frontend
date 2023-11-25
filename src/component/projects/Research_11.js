import styles from "../Research.module.css"

export default function Research_11() {
   return (
      <div class="container text-left">
         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="pt-0 ps-5">Skilled Trades Research, InnoVation, and Education in Occupational Safety
               and Health (STRIVE OSH)
            </h4>
         </div>
         <div class={styles.re_info}>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Funding Agency:</span> Ministry of Labour, Immigration,
               Training and Skills Development (MLITSD)
            </div>
            <div class={styles.re_info_detail}>
               CISWP aims to improve the success and competitiveness of Ontario skilled-trades
               businesses by directly addressing workforce challenges and preventing workplace
               injuries and disabilities.</div>

            <div class={styles.re_info_detail}>
               Status: Ongoing (2021-2024)
            </div>
         </div>
         <div class="accordion" id="re_11" style={{ width: "90%", margin: "auto" }}>
            <div class="accordion-item">
               <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button"
                     data-bs-toggle="collapse" data-bs-target="#re_11b">
                     Learn more
                  </button>
               </h2>
               <div id="re_11b" class="accordion-collapse collapse"
                  data-bs-parent="re_11">
                  <div class={styles.re_desc_body}>
                     <div class={styles.re_info_detail}>
                        The skilled trades industry has three pressing needs:
                     </div>
                     <ol class={styles.re_info_detail}>
                        <li>Sustaining the rapidly aging workforce.</li>
                        <li>Reducing the risk of worker injury.</li>
                        <li>Improving job accessibility for underrepresented groups such as women,
                           people with disabilities, newcomers to Canada, and Indigenous peoples.
                        </li>

                     </ol>
                     <div class={styles.re_info_detail}>
                        The STRIVE OSH project consists of nine research initiatives, guided by three
                        overarching themes: a) build capacity of the current and next generation of the
                        skilled trades workforce; b) develop and innovate tools, guidelines, and best
                        practices through applied research; and c) knowledge and technology exchange and
                        exploitation. The outcomes of this work will have direct economic and societal
                        impacts on Ontario, train the next generation of skilled trade workers in the province,
                        and help industries (particularly small and medium-sized enterprises) build capacity
                        and assist in promoting innovation and commercialization.
                     </div>


                  </div>
               </div>
            </div>
         </div>




      </div >
   );

}
