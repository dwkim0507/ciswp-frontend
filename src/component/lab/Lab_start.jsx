import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Lab_start() {

   function onMouseEnterHandler1() {
      const box = document.querySelector("#start_explore_focus1");
      const focus_box = document.querySelector("#start_explore_focus1_box");
      box.firstChild.src = "./img/labs/start_qu_focus.png";
      focus_box.classList.add("on");
   }

   function onMouseLeaveHandler1() {
      const box = document.querySelector("#start_explore_focus1");
      const focus_box = document.querySelector("#start_explore_focus1_box");
      box.firstChild.src = "./img/labs/start_qu_default.png";
      focus_box.classList.remove("on");
   }

   function onMouseEnterHandler2() {
      const box = document.querySelector("#start_explore_focus2");
      const focus_box = document.querySelector("#start_explore_focus2_box");
      box.firstChild.src = "./img/labs/start_qu_focus.png";
      focus_box.classList.add("on");
   }

   function onMouseLeaveHandler2() {
      const box = document.querySelector("#start_explore_focus2");
      const focus_box = document.querySelector("#start_explore_focus2_box");
      box.firstChild.src = "./img/labs/start_qu_default.png";
      focus_box.classList.remove("on");
   }

   function onMouseEnterHandler3() {
      const box = document.querySelector("#start_explore_focus3");
      const focus_box = document.querySelector("#start_explore_focus3_box");
      box.firstChild.src = "./img/labs/start_qu_focus.png";
      focus_box.classList.add("on");

   }

   function onMouseLeaveHandler3() {
      const box = document.querySelector("#start_explore_focus3");
      const focus_box = document.querySelector("#start_explore_focus3_box");
      box.firstChild.src = "./img/labs/start_qu_default.png";
      focus_box.classList.remove("on");
   }

   function onMouseEnterHandler4() {
      const box = document.querySelector("#start_explore_focus4");
      const focus_box = document.querySelector("#start_explore_focus4_box");
      box.firstChild.src = "./img/labs/start_qu_focus.png";
      focus_box.classList.add("on");

   }

   function onMouseLeaveHandler4() {
      const box = document.querySelector("#start_explore_focus4");
      const focus_box = document.querySelector("#start_explore_focus4_box");
      box.firstChild.src = "./img/labs/start_qu_default.png";
      focus_box.classList.remove("on");
   }

   return (
      <div class="container-fluid p-0">
         <div class="lab_hero">
            <img src="img/hero_start_t.png" class="d-block w-100" alt="..." />

            {/* <img src="img/hero_start.png" class="d-block w-100" alt="..." />
            <div class="lab_hero_text">
               <h2 class="lab_hero_title">Welcome to the<br />
                  <span style={{ color: "#FCB03C" }}> START</span> LAB
               </h2>
               <div class="lab_hero_content">
                  The START Lab consists of equipment that can measure multiple
                  dimensions of human performance related to injury risk
               </div>
            </div> */}

         </div>

         <div class="container mt-5">
            <div class="lab_title">
               <span style={{ color: "#139187" }}> S</span>KILLED
               <span style={{ color: "#139187" }}> T</span>RADES
               <span style={{ color: "#139187" }}> A</span>PPLIED <br />
               <span style={{ color: "#139187" }}> R</span>ESEARCH AND
               <span style={{ color: "#139187" }}> T</span>RAINING LAB
            </div>
            <br />
            <p>
               Workplace injuries are significant in the skilled trades and often lead
               to early exits from the labour market. Premature exits have contributed
               to the current and emerging skilled trades labour shortage. Without intervention,
               skilled trades companies have lost opportunities, turned down contracts,
               and have been less competitive. Informed by industry partners and our research,
               there is an immediate need for new knowledge and evidence-informed resources
               for skilled trades businesses to reduce the risk of workplace injuries.
               The Skilled Trades Human Performance Lab will consist of equipment
               that can measure multiple dimensions of human performance related
               to workplace injury risk and capture multiple types of work exposures, demands,
               and hazards, and will allow us to conduct innovative and ecologically valid research
               within Conestoga’s skilled trades ecosystem.
            </p>

            <br />

            <h3>Our START Lab Features</h3>

            <div class="row ps-3">
               <div class="col-6 ps-2"><Lab_start_slide /> </div>
               <div class="col-6 pe-4">


                  <div class="start_card_grid">
                     <div class="start_card">
                        <img src="./img/labs/start_eq_camera.png" class="card-img-top" alt="" />
                        <div class="start_card_body">
                           <div class="start_card_text">
                              A 10-camera high fidelity motion capture system</div>
                        </div>
                     </div>
                     <div class="start_card">
                        <img src="./img/labs/start_eq_muscle.png" class="card-img-top" alt="" />
                        <div class="start_card_body">
                           <div class="start_card_text">
                              A full-body wireless muscle activity measurement system</div>
                        </div>
                     </div>
                     <div class="start_card">
                        <img src="./img/labs/start_eq_suite.png" class="card-img-top" alt="" />
                        <div class="start_card_body">
                           <div class="start_card_text">
                              A suite of force measuring equipment including force plates</div>
                        </div>
                     </div>
                     <div class="start_card">
                        <img id="start_card_img2" src="./img/labs/start_eq_force.jpg" class="card-img-top" alt="" />
                     </div>

                  </div >
               </div>
            </div>

            <div class="lab_sub_title mt-3">Time to Explore</div>

            <div class="start_explore">
               <img src="img/labs/start_ex_room.png" alt="..." />
               <div id="start_explore_focus1"
                  onMouseEnter={onMouseEnterHandler1}
                  onMouseLeave={onMouseLeaveHandler1}>
                  <img src="./img/labs/start_qu_default.png" alt="" />
               </div>
               <div id="start_explore_focus1_box">
                  <img src="./img/labs/start_eq_camera2.png" />
                  <div class="start_focus_text">
                     Vicon Camera</div>
                  <div class="start_focus_text_desc">
                     A 10-camera high fidelity motion capture system</div>
               </div>

               <div id="start_explore_eq2">
                  <img src="./img/labs/start_ex_room_suite.png" alt="" />
               </div>

               <div id="start_explore_focus2"
                  onMouseEnter={onMouseEnterHandler2}
                  onMouseLeave={onMouseLeaveHandler2}>
                  <img src="./img/labs/start_qu_default.png" alt="" />
               </div>
               <div id="start_explore_focus2_box">
                  <img src="./img/labs/start_eq_suite2.jpg" />
                  <div class="start_focus_text">
                     Load Cell Amp</div>
                  <div class="start_focus_text_desc">
                     A suite of force measuring equipment including force plates</div>
               </div>

               <div id="start_explore_eq3">
                  <img src="./img/labs/start_ex_room_muscle.png" alt="" />
               </div>

               <div id="start_explore_focus3"
                  onMouseEnter={onMouseEnterHandler3}
                  onMouseLeave={onMouseLeaveHandler3}>
                  <img src="./img/labs/start_qu_default.png" alt="" />
               </div>
               <div id="start_explore_focus3_box">
                  <img src="./img/labs/start_eq_muscle2.jpg" />
                  <div class="start_focus_text">
                     Cometa EMG sensors</div>
                  <div class="start_focus_text_desc">
                     A full-body wireless muscle activity measurement system</div>
               </div>

               <div id="start_explore_focus4"
                  onMouseEnter={onMouseEnterHandler4}
                  onMouseLeave={onMouseLeaveHandler4}>
                  <img src="./img/labs/start_qu_default.png" alt="" />
               </div>
               <div id="start_explore_focus4_box">
                  <img src="./img/labs/start_eq_vicon2.png" />
                  <div class="start_focus_text">
                     Vicon POE</div>
                  <div class="start_focus_text_desc">
                     A little description</div>
               </div>

            </div>

         </div >


      </div >
   );

   function Lab_start_slide() {
      return (
         <Carousel
            autoPlay
            interval={5000}
            infiniteLoop={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            width={"98%"}
         >
            <div class="start_slide_img ">
               <img src="img/labs/start_slide1.jpg" />
            </div>
            <div class="start_slide_img">
               <img src="img/labs/start_slide2.jpg" />
            </div>
            <div class="start_slide_img">
               <img src="img/labs/start_slide3.jpg" />
            </div>
         </Carousel >

      );

   }

}