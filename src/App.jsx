import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_home from './component/Main_home';

import Main_mission from './component/Main_mission';
import Main_people from "./component/Main_people";
import Main_contact from "./component/Main_contact";

import Main_people_Amin from "./component/Main_people_amin";
import Main_people_Marcus from "./component/Main_people_marcus";
import Main_people_Nicki from "./component/Main_people_nicki";
import Main_people_Bronson from "./component/Main_people_bronson";
import Main_people_Kumar from "./component/Main_people_kumar";
import Main_people_Binh from "./component/Main_people_binh";
import Main_people_Victoria from "./component/Main_people_victoria";

import Main_stride from './component/Main_stride';
import Main_start from './component/Main_start';
import Main_field from './component/Main_field';

import Main_research_1 from "./component/Main_research_1";
import Main_research_2 from "./component/Main_research_2";
import Main_research_3 from "./component/Main_research_3";
import Main_research_4 from "./component/Main_research_4";

import Main_pubs_1 from "./component/Main_pubs_1";
import Main_pubs_2 from "./component/Main_pubs_2";
import Main_pubs_detail from "./component/Main_pubs_detail";

import Main_news from "./component/Main_news";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main_home />} />
        <Route index element={<Main_home />} />

        <Route path="mission" element={<Main_mission />} />
        <Route path="people" element={<Main_people />} />
        <Route path="contact" element={<Main_contact />} />

        <Route path="amin" element={<Main_people_Amin />} />
        <Route path="marcus" element={<Main_people_Marcus />} />
        <Route path="nicki" element={<Main_people_Nicki />} />
        <Route path="bronson" element={<Main_people_Bronson />} />
        <Route path="kumar" element={<Main_people_Kumar />} />
        <Route path="binh" element={<Main_people_Binh />} />
        <Route path="victoria" element={<Main_people_Victoria />} />

        <Route path="research_1" element={<Main_research_1 />} />
        <Route path="research_2" element={<Main_research_2 />} />
        <Route path="research_3" element={<Main_research_3 />} />
        <Route path="research_4" element={<Main_research_4 />} />

        <Route path="stride" element={<Main_stride />} />
        <Route path="start" element={<Main_start />} />
        <Route path="field" element={<Main_field />} />

        <Route path="/pubs_1" element={<Main_pubs_1 />} />
        <Route path="/pubs_2" element={<Main_pubs_2 />} />
        <Route path="/pubs_detail" element={<Main_pubs_detail />} />

        <Route path="news" element={<Main_news />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
