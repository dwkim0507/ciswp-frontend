import Research_detail from "./Research_detail";


export default function Research_2() {
   return (
      <div class="container-fluid p-0">
         <div class="res_hero">
            <img src="img/hero_healthcare_t.png" class="d-block w-100" alt="..." />

         </div>


         <Research_detail
            title={"Towards the Development of the Canadian Work Disability Prevention Management System Standard for Paramedics"}
            fund={"Defense Research and Development Canada (DRDC)"}
            status={"Completed"}
            desc={"Develop, promote, and disseminate a nationally applicable Canadian Paramedic Work Disability Prevention Standard and related tools to help prevent and manage work disability, specifically those associated with Operational Stress Injuries."}
            resID={"h_001"}
         />

         <Research_detail
            title={"Towards the Development of the Canadian first responder fatigue risk management standard"}
            fund={"Defense Research and Development Canada (DRDC)"}
            status={"Completed"}
            desc={"Develop an evidence-informed National Standard on First Responder Workplace Fatigue Risk Management which will be used across Canada to improve first responder health and wellness and will support the collection of consistent, national data that will inform the development of a robust and comprehensive Canadian First Responder Information System."}
            resID={"h_002"}
         />

         <Research_detail
            title={"Towards the Development of the Canadian Standard for Paramedic Ground Emergency Response Vehicles and Equipment"}
            fund={"Defense Research and Development Canada (DRDC)"}
            status={"Completed"}
            desc={"Develop a Canadian Standard that specifies minimum human factors/ergonomic design and usage requirements for emergency response vehicles and equipment with consideration to paramedic and patient safety and infection control."}
            resID={"h_003"}
         />

         <Research_detail
            title={"Rapid Guideline to Address the Mental Health Impact of COVID-19 Among Canadian Paramedics"}
            fund={"Natural Sciences and Engineering Research Council of Canada (NSERC)"}
            status={"Completed"}
            desc={"Rapidly mobilize solutions and expertise to develop a rapid guideline for the paramedic community to prevent and manage mental health injuries during and after the COVID-19 pandemic."}
            resID={"h_004"}
         />

         <Research_detail
            title={"Empowering the Frontline Workforce to Combat COVID-19: Infrastructure to Cultivate a Community of Practice"}
            fund={"Canada Foundation for Innovation (CFI)"}
            status={"Completed"}
            desc={"Reduce the impact of COVID-19 on the Canadian workforce and support the sustainability of Canadian businesses through cultivating a community of practice between key stakeholders."}
            resID={"h_005"}
         />

         <Research_detail
            title={"Total Worker Health for Long-Term Care Workers"}
            fund={"Internal"}
            status={"Completed"}
            desc={"The objective of this project is to conduct a needs assessment in long-term care facilities to improve workforce safety, health and well-being."}
            resID={"h_006"}
         />

      </div >
   );

}
