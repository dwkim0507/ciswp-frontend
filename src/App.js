import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './component/Navigation';
import Main_hero from './component/Main_hero';
import Main_body from './component/Main_body';

import About_mission from "./component/About_mission";
import About_mission_2 from "./component/About_mission_2";
import About_people from "./component/About_people";
import About_contact from "./component/About_contact";

import About_Amin from "./component/people/About_Amin";
import About_Marcus from "./component/people/About_Marcus";
import About_Bronson from "./component/people/About_Bronson";
import About_Kumar from "./component/people/About_Kumar";
import About_Victoria from "./component/people/About_Victoria";
import About_Nicki from "./component/people/About_Nicki";

import Research_1 from "./component/Research_1";
import Research_2 from "./component/Research_2";
import Research_3 from "./component/Research_3";
import Research_4 from "./component/Research_4";


import Lab_stride from "./component/Lab_stride";
import Lab_start from "./component/Lab_start";
import Lab_field from "./component/Lab_field";

import Pubs_1 from "./component/Pubs_1";
import Pubs_2 from "./component/Pubs_2";
import Pubs_3 from "./component/Pubs_3";

import News from "./component/News";

import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" >
            <Main_hero />
            <Main_body />
            <br />
            <Footer />
          </Route>
          <Route path="/about_mission" >
            <br /><br />
            <About_mission />
            <br /><br />
            <About_mission_2 />
            <br />
            <Footer />
          </Route>
          <Route path="/about_contact" >
            <About_contact />
          </Route>
          <Route path="/about_people" >
            <About_people />
            <br />
            <Footer />
          </Route>
          <Route path="/about_Amin" >
            <About_Amin />
            <br />
            <Footer />
          </Route>
          <Route path="/about_Marcus" >
            <About_Marcus />
            <br />
            <Footer />
          </Route>
          <Route path="/about_Bronson" >
            <About_Bronson />
            <br />
            <Footer />
          </Route>
          <Route path="/about_Kumar" >
            <About_Kumar />
            <br />
            <Footer />
          </Route>
          <Route path="/about_Victoria" >
            <About_Victoria />
            <br />
            <Footer />
          </Route>
          <Route path="/about_Nicki" >
            <About_Nicki />
            <br />
            <Footer />
          </Route>

          <Route path="/research_1" >
            <Research_1 />
            <br /><br />
            <Footer />
          </Route>
          <Route path="/research_2" >
            <Research_2 />
            <br /><br />
            <Footer />
          </Route>
          <Route path="/research_3" >
            <Research_3 />
            <br /><br />
            <Footer />
          </Route>

          <Route path="/research_4" >
            <Research_4 />
            <br /><br />
            <Footer />
          </Route>

          <Route path="/lab_stride" >
            <Lab_stride />
            <br /><br />
            <Footer />
          </Route>
          <Route path="/lab_start" >
            <Lab_start />
            <br /><br />
            <Footer />
          </Route>
          <Route path="/lab_field" >
            <Lab_field />
            <br /><br />
            <Footer />
          </Route>

          <Route path="/pubs_1" >
            <br />
            <Pubs_1 />
            <br /><br />
            <Footer />
          </Route>
          <Route path="/pubs_2" >
            <br />
            <Pubs_2 />
            <br /><br />
            <Footer />
          </Route>
          <Route path="/pubs_3" >
            <br />
            <Pubs_3 />
            <br /><br />
            <Footer />
          </Route>

          <Route path="/news" >
            <br /><br />
            <News />
            <br /><br />
            <Footer />
          </Route>

        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
