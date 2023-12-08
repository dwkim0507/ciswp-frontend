import Research_detail from "./Research_detail";

export default function Research_4() {
   return (
      <div class="container-fluid p-0">
         <div class="res_hero">
            <img src="img/hero_edi_t.png" class="d-block w-100" alt="..." />

         </div>

         <Research_detail
            title={"Inclusive and Accessible Skilled Trade Employment for People with Disabilities"}
            fund={"Accessibility Standards Canada (ASC)"}
            status={"Ongoing (20??-20??)"}
            desc={"Focusing on the inclusion of accessible employment for people with disabilities on skilled trades sector and informing accessibility standards by synthesizing evidence."}
            resID={"e_001"}
         />

         <Research_detail
            title={"Assessing the Impact of Social Enterprises on the Integration of Black and Racialized Persons"}
            fund={"Employment and Social Development Canada (ESDC)"}
            status={"Ongoing (20??-20??)"}
            desc={"Assessing the extent to which social enterprises focusing on work integration contribute to the social and labour market integration of black and racialized persons across western Ontario."}
            resID={"e_002"}
         />

         <Research_detail
            title={"Towards the Development of the Canadian Work Disability Management System Standard"}
            fund={"Internal"}
            status={"Completed"}
            desc={"Develop and promote a work disability management system standard that will help increase the capacity of employers to manage work disability prevention activities systematically."}
            resID={"e_003"}
         />

      </div >
   );

}
