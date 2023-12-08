// import '../App.css';

export default function About_contact() {
   return (

      <div class="container-fluid m-0 p-0">
         <div class="lab_hero">
            <img src="img/about/contact_hero.png" class="d-block w-100" alt="..." />

         </div>

         <div class="row" >
            <div class="col-4 m-0 p-0"  >

               <img src="img/about/contact_map.png" width="100%" />
            </div>
            <div class="col-4" id="contact_col2">

               <div class="contact_title2">
                  Meet Us
               </div>

               <div class="contact_content2">
                  <img src="img/about/icon_mail.png" alt="" height="30" />
                  <a href="mailto:ciswp@conestogac.on.ca"
                     class="text-decoration-none" style={{ color: "#087D73" }}>ciswp@conestogac.on.ca</a>
               </div>
               <div class="contact_content2">
                  <img src="img/about/icon_phone.png" alt="" height="30" />
                  <a href="tel:519-748-5220 Ext. 7115"
                     class="text-decoration-none" style={{ color: "#087D73" }} >519-748-5220 Ext. 7115</a>
               </div>
               <div class="contact_content2">
                  <img src="img/about/icon_map.png" alt="" height="30" />
                  <span style={{ color: "#087D73" }}> &nbsp;&nbsp;&nbsp; 25 Reuter Dr, Cambridge, ON N3E 1A9</span>

               </div>

            </div>


            <div class="col-4" id="contact_col3" >
               <div class="contact_title3">
                  Find us on
               </div>
               <div class="contact_content3">
                  We are also active on different social sites.
                  Find us on any of these social handles.
                  with us and follow us for every updates and activities.
               </div>
               <div class="contact_content3">
                  <a href="https://www.linkedin.com/company/canadian-institute-for-safety-wellness-and-performance/">
                     <img src="img/logo-ln.png" width="40" /></a> &nbsp;&nbsp;
                  <span class="ps-1"> <a href="https://twitter.com/CISWP_Conestoga">
                     <img src="img/logo-tw.png" alt="" width="35" /> </a> &nbsp;&nbsp;&nbsp;&nbsp;
                     <a href="https://www.youtube.com/channel/UCWGG-XumHfuDHfonokyRFmg" target="_self">
                        <img src="img/logo-yo.png" alt="" width="45" /></a>
                  </span>
               </div>
            </div>

         </div>



         <footer class="bg-dark pt-lg-5" >

            <div class="container text-left" style={{ marginTop: "50px" }} >

               <div class="row mb-3 mb-lg-5">
                  <div class="col-lg-6 my-6">
                     <h5 class="text-white pb-2">Conestoga Administration</h5>
                     <p class="text-white small">299 Doon Valley Drive<br />Kitchener, Ontario N2G 4M4, Canada<br />Phone: 519-748-5220</p>
                     <a style={{ textDecoration: "none" }} href="https://www.facebook.com/ConestogaCollege" target="_blank">&nbsp;&nbsp;<img src="img/f_icon_facebook.png" alt="" height="45" /></a>
                     <a style={{ textDecoration: "none" }} href="https://twitter.com/ConestogaC" target="_blank">&nbsp;<img src="img/f_icon_twitter.png" alt="" height="45" /></a>
                     <a style={{ textDecoration: "none" }} href="https://www.youtube.com/c/ConestogaCollegeOfficial" target="_blank">&nbsp;<img src="img/f_icon_youtube.png" alt="" height="45" /></a>
                     <a style={{ textDecoration: "none" }} href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fconestogacollege%2F" target="_blank">&nbsp;<img src="img/f_icon_instagram.png" alt="" height="45" /></a>
                     <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/organization-guest/company/conestoga-college-institute-of-technology-and-advanced-learning" target="_blank">&nbsp;<img src="img/f_icon_linkedin.png" alt="" height="45" /></a>
                  </div>
                  <div class="col-lg-3 my-6">
                     <h2 class="h4 text-white pb-2"></h2>
                     <ul class="text-light list-unstyled">
                     </ul>
                  </div>
                  <div class="col-lg-3 my-6">
                     <h5 class="text-white pb-2">Quick links for:</h5>
                     <ul class="text-light list-unstyled">
                        <li><a class="text-light small" style={{ textDecoration: "none" }} href="https://www.conestogac.on.ca/giving" title="Giving to Conestoga" target="_self">Giving to Conestoga</a></li>
                        <li><a class="text-light small" style={{ textDecoration: "none" }} href="https://www.conestogac.on.ca/about/corporate-information/policies" title="Policies &amp; Procedures" target="_self">Policies &amp; procedures</a></li>
                        <li><a class="text-light small" style={{ textDecoration: "none" }} href="https://www.conestogac.on.ca/visit-us" title="Visit us" target="_self">Visit us</a></li>
                        <li><a class="text-light small" style={{ textDecoration: "none" }} href="https://www.conestogac.on.ca/admissions/applying-to-conestoga" title="Applying to Conestoga" target="_self">Applying to Conestoga</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="bg-light p-1">
               <div class="container">
                  <div class="row mt-3">
                     <p class="col-lg-12 text-center small">
                        &copy; Copyright 2022 All Rights Reserved
                        | <a href="https://www.conestogac.on.ca/web-site-privacy-terms-of-use-and-conditions" title="Terms &amp; conditions of use" target="_blank">Terms &amp; conditions of use</a>
                        | <a href="/contact-us" title="Contact" target="_self">Contact</a>
                     </p>
                  </div>
               </div>
            </div>

         </footer >


      </div>
   );

}
