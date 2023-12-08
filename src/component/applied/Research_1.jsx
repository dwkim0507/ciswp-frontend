import Research_detail from "./Research_detail";

export default function Research_1() {
   return (
      <div class="container-fluid p-0">

         <div class="res_hero">
            <img src="img/hero_skilled_t.png" class="d-block w-100" alt="..." />


            {/* <img src="img/project_res11.png" class="d-block w-100" alt="..." />
            <div class="res_hero_text">
               <h2 class="res_hero_title">
                  Applied Research in
               </h2>
               <h2 class="res_hero_title">
                  Skilled Trades
               </h2>
            </div> */}

         </div>

         <Research_detail
            title={"Skilled Trades Research, InnoVation, and Education in Occupational Safety and Health (STRIVE OSH)"}
            fund={"Ministry of Labour, Immigration, Training and Skills Development (MLITSD)"}
            status={"Ongoing (2021-2024)"}
            desc={"CISWP aims to improve the success and competitiveness of Ontario skilled-trades businesses by directly addressing workforce challenges and preventing workplace injuries and disabilities."}
            resID={"s_001"}
         />
         <Research_detail
            title={"Improving Worker Health and Performance in Construction: Implementation and Adoption of Advanced Technologies"}
            fund={"Social Sciences and Humanities Research Council (SSHRC) through Natural Sciences and Engineering Research Council of Canada (NSERC) College and Community Social Innovation Fund (CCSIF)"}
            status={"Ongoing (2021-2024)"}
            desc={"Canada is experiencing a dramatic shift in its workforce demographic as Canadians live longer and delay retirement. Construction injuries are among the most costly across all industries in Ontario. Without intervention, the construction sector expects a significant shortage of skilled workers over the next decade."}
            resID={"s_002"}
         />


      </div >
   );

}
