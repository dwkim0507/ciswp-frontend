import { Link } from "react-router-dom";

export default function Navigation() {
   return (
      <div >
         < div class="before_header" >
            <a href="https://www.conestogac.on.ca/">CONESTOGAC.ON.CA</a>
         </div >
         <nav class="navbar bg-black navbar-expand-xl ps-5" data-bs-theme="dark">
            <Link to="/" class="navbar-brand" >
               <img src="img/ciswp-logo.png" alt="CISWP"></img>
            </Link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                  <li class="nav-item dropdown">
                     <Link to="/mission"
                        class="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown">
                        About CISWP
                     </Link>
                     <ul class="dropdown-menu">
                        <li><Link to="/mission" class="dropdown-item">
                           Mission & Value
                        </Link></li>
                        <li><Link to="/people" class="dropdown-item">
                           People
                        </Link></li>
                        <li><Link to="/contact" class="dropdown-item">
                           Contact us
                        </Link></li>
                     </ul>
                  </li>

                  <li class="nav-item dropdown">
                     <Link to="/research_1"
                        class="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown">
                        Applied Research
                     </Link>
                     <ul class="dropdown-menu">
                        <li><Link to="/research_1" class="dropdown-item">
                           Skilled Trades
                        </Link></li>
                        <li><Link to="/research_2" class="dropdown-item">
                           Healthcare & First Response
                        </Link></li>
                        <li><Link to="/research_3" class="dropdown-item">
                           Workforce Development
                        </Link></li>
                        <li><Link to="/research_4" class="dropdown-item">
                           EDI & Accessibility
                        </Link></li>
                     </ul>
                  </li>

                  <li class="nav-item dropdown">
                     <Link to="/main_stride"
                        class="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown">
                        Research Labs
                     </Link>
                     <ul class="dropdown-menu">
                        <li><Link to="/stride" class="dropdown-item">
                           STRIDE Lab
                        </Link></li>
                        <li><Link to="/start" class="dropdown-item">
                           START Lab
                        </Link></li>
                        <li><Link to="/field" class="dropdown-item">
                           Field to Lab to Field
                        </Link></li>
                     </ul>
                  </li>

                  <li class="nav-item dropdown">
                     <Link to="/pubs_1"
                        class="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown">
                        Publications & Resources
                     </Link>
                     <ul class="dropdown-menu">
                        <li><Link to="/pubs_1" class="dropdown-item">
                           Scientific Report & Articles
                        </Link></li>
                        <li><Link to="/pubs_2" class="dropdown-item">
                           Webinars
                        </Link></li>

                     </ul>
                  </li>

                  <li class="nav-item">
                     <Link to="/news"
                        class="nav-link active" >
                        News & Events
                     </Link>
                  </li>

               </ul>
            </div>

         </nav >

      </div >

   );
}
