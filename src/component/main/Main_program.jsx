
export default function Main_program() {


   return (
      <div class="container text-left mt-5" style={{ minHeight: "550px" }}>

         <h3>CISWP's Research Program</h3>
         <p>
            CISWP adopts a transdisciplinary and collaborative approach to build capacity
            for productive and sustainable work. Our research program is organized
            into seven overarching and overlapping research themes:
         </p>

         <div class="container p-1">
            <ul class="res_tabs ps-0">
               <li>
                  <input type="radio" name="tab_group" id="tab1" defaultChecked />
                  <label for="tab1" >
                     Knowledge transfer & Exchange
                  </label>
                  <div id="tab-content1" class="tab-content" >
                     <img src="img/res_prog_tab1.png" class="d-block w-75 m-auto" alt="" />

                     <div class="res_tab_text p-3">
                        <h5>Knowledge Transfer & Exchange</h5>
                        <p>Knowledge transfer and exchange (KTE) is vital for applying research knowledge into practice
                           and decision-making. With immense resources invested into research,
                           the knowledge generated should be readily accessible, available and applicable
                           to knowledge users to use in practice, planning and policy-making.
                           Through ongoing collaboration with stakeholders in all stages of our applied research,
                           including conceptualization, development, execution and reporting,
                           our KTE strategies fulfill the identified needs of knowledge users.
                        </p>
                     </div>
                  </div>
               </li>

               <li>
                  <input type="radio" name="tab_group" id="tab2" />
                  <label for="tab2" >
                     Musculoskeletal Health
                  </label>
                  <div id="tab-content2" class="tab-content">
                     <img src="img/res_prog_tab1.png" class="d-block w-75 m-auto" alt="" />
                     <div class="res_tab_text p-3">
                        <h5>Musculoskeletal Health</h5>
                        <p>CISWP collaborates with stakeholders including employers, workers,
                           not-for-profits, labour/unions, academics, service providers,
                           policy makers and practitioners to reduce the risk of
                           Musculoskeletal Disorders (MSD). MSD are injuries that affect muscles,
                           ligaments, tendons and nerves caused by exposure to known ergonomic hazards
                           including forceful exertions, repetitive motion, awkward posture and vibration.
                        </p>
                     </div>
                  </div>
               </li>

               <li>
                  <input type="radio" name="tab_group" id="tab3" />
                  <label for="tab3">
                     Mental Health & Wellness
                  </label>
                  <div id="tab-content3" class="tab-content" >
                     <img src="img/res_prog_tab1.png" class="d-block w-75 m-auto" alt="" />
                     <div class="res_tab_text p-3">
                        <h5>Mental Health & Wellness</h5>
                        <p>Mental health is a state of well-being, where the individual can manage
                           the normal stresses of life, work productively and fruitfully,
                           and reach her/his potential (MHCC, 2016). Effective workplace strategies
                           for mental health and wellness are critical for productive and sustainable work,
                           and for the prevention and management of mental illness.
                        </p>
                     </div>
                  </div>

               </li>

               <li>
                  <input type="radio" name="tab_group" id="tab4" />
                  <label for="tab4">
                     Organizational Management System
                  </label>
                  <div id="tab-content4" class="tab-content" >
                     <img src="img/res_prog_tab1.png" class="d-block w-75 m-auto" alt="" />
                     <div class="res_tab_text p-3">
                        <h5>Organizational Management System</h5>
                        <p>
                           Organizations are responsible for providing safe working conditions and
                           required to implement strategies to effectively prevent workplace injuries.
                           If these activities are performed within some organizational-level framework,
                           it may be considered a "management system."
                           Often, health, safety and workplace injury prevention is approached
                           as individual siloed programs, which is not sustainable or effective.
                           It also results in additional human and financial costs and makes isolated
                           programs vulnerable to financial downturns.
                        </p>
                     </div>
                  </div>
               </li>

               <li>
                  <input type="radio" name="tab_group" id="tab5" />
                  <label for="tab5">
                     Disability & Employment
                  </label>
                  <div id="tab-content5" class="tab-content" >
                     <img src="img/res_prog_tab1.png" class="d-block w-75 m-auto" alt="" />
                     <div class="res_tab_text p-3">
                        <h5>Disability & Employment</h5>
                        <p>
                           Recent statistics suggest that an estimated 20 per cent of Canadians aged 15
                           and older have one or more disabilities. This limits the daily activity
                           and participation of over 6.2 million Canadians in our workforce.
                           CISWP addresses this important issue by supporting stakeholders
                           to comply with federal and provincial legislative requirements
                           including Canada's obligations under the United Nation's Convention
                           on the Rights of Persons with Disabilities.
                        </p>
                     </div>
                  </div>
               </li>
               <li>
                  <input type="radio" name="tab_group" id="tab6" />
                  <label for="tab6">
                     Workforce for Tomorrow
                  </label>
                  <div id="tab-content6" class="tab-content" >
                     <img src="img/res_prog_tab1.png" class="d-block w-75 m-auto" alt="" />
                     <div class="res_tab_text p-3">
                        <h5>Workforce for Tomorrow</h5>
                        <p>
                           The nature of work has changed and the new form of employment is becoming
                           more flexible and uncertain. It is moving online through extensive development
                           of technology and is becoming borderless.
                           It is rapidly evolving due to the introduction of robotics,
                           AI technologies and smart machines. Concurrently, the Canadian workforce is
                           aging and becoming more diverse in terms of cultural/ethnic origin,
                           abilities and skill sets.
                        </p>
                     </div>
                  </div>
               </li>

            </ul>

         </div>

      </div>

   );
}
