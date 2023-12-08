import Research_detail from "./Research_detail";


export default function Research_3() {
   return (
      <div class="container-fluid p-0">
         <div class="res_hero">
            <img src="img/hero_workforce_t.png" class="d-block w-100" alt="..." />

         </div>

         <Research_detail
            title={"Supporting Workforce Development in Small and Rural Communities in Waterloo Region"}
            fund={"Employment and Social Development Canada (ESDC)"}
            status={"Ongoing (20??-20??)"}
            desc={"Supporting the continued economic development of local, rural, small communities which make up Waterloo Region by supporting small businesses, particularly in high-demand and/or significantly evolving sectors."}
            resID={"w_001"}
         />

         <Research_detail
            title={"The National Work from Home Survey: Investigating its Impact on the Physical and Mental Health of Canadians"}
            fund={"Internal"}
            status={"Completed"}
            desc={"CIWSP led a nationwide survey aimed at understanding these impacts. The study examined the mental and physical effects of working from home and aimed to understand how the health and wellbeing of the Canadian workforce can be protected"}
            resID={"w_002"}
         />

         <Research_detail
            title={"Working in the Digital Economy: A Scoping Review of the Impacts of Work from Home Arrangements on Personal and Organizational Performance and Productivity"}
            fund={"Social Sciences and Humanities Research Council (SSHRC) Knowledge Synthesis Grant"}
            status={"Completed"}
            desc={"Aligning work from home (WFH) with the business goals of organizations may help catalyze awareness from decision-makers and serve to implement WFH policies effectively."}
            resID={"w_003"}
         />

         <Research_detail
            title={"Baseline Study on Organizational Readiness for the Adoption of Standards on Workplace Impairment"}
            fund={"CSA Group"}
            status={"Completed"}
            desc={"To understand the specific barriers across industries and business sizes to better support them in implementing a standard on workplace impairment."}
            resID={"w_004"}
         />

         <Research_detail
            title={"Disclosing a Mental Health Condition in the Workplace"}
            fund={"Canadian Institutes of Health Research (CIHR)"}
            status={"Completed"}
            desc={"To assess the antecedents and outcomes of disclosure decisions in the workplace and to develop an in-depth understanding of the disclosure process, including disclosure needs, values, goals, and events."}
            resID={"w_005"}
         />

         <Research_detail
            title={"Triple Burden to Third Shift: The Impact of COVID-19 on Working Mothers’ Navigation of Multiple Roles"}
            fund={"Canadian Institutes of Health Research (CIHR)"}
            status={"Completed"}
            desc={"Our research questions centre on the experience of mothers in balancing paid and unpaid work and the policies and practices of organizations in supporting employees, particularly women, in maintaining productivity and employment while fulfilling family obligations during and following the COVID-19 lockdown"}
            resID={"w_006"}
         />

      </div >
   );

}
