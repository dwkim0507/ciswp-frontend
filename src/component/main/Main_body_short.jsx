import Main_intro from './Main_intro';
import Main_program_short from './Main_program_short';
import Main_program_short2 from './Main_program_short2';

import Main_lab from './Main_lab';

import Main_survey from './Main_survey';
import Top_news from './Top_news';
import Top_pub from './Top_pub';
import Top_webinar from './Top_webinar';

export default function Main_body_short() {
   return (
      <div class="container text-left">
         <div class="row">

            <Main_intro />
            <Main_program_short />
            <Main_program_short2 />

            <Main_lab />

            <Main_survey />
            <Top_news />
            <Top_webinar />
            <Top_pub />

         </div>

      </div >

   );
}
