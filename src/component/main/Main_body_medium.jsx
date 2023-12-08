import Main_intro from './Main_intro';
import Main_program from './Main_program';
import Main_lab from './Main_lab';

import Main_survey from './Main_survey';
import Top_news from './Top_news';
import Top_pub from './Top_pub';
import Top_webinar from './Top_webinar';

export default function Main_body_full() {
   return (
      <div class="container text-left">
         <div class="row">

            <Main_intro />
            <Main_program />
            <Main_lab />

            <Main_survey />
            <Top_news />
            <Top_webinar />
            <Top_pub />
         </div>

      </div >

   );
}
