import Main_intro from './main/Main_intro';
import Main_program_short from './main/Main_program_short';
import Main_program_short2 from './main/Main_program_short2';

import Main_lab from './main/Main_lab';

import Main_survey from './main/Main_survey';
import Main_news from './main/Main_news';
import Main_pub from './main/Main_pub';
import Main_webinar from './main/Main_webinar';

export default function Main_body_short() {
   return (
      <div class="container text-left">
         <div class="row">

            <Main_intro />
            <Main_program_short />
            <Main_program_short2 />

            <Main_lab />

            <Main_survey />
            <Main_news />
            <Main_webinar />
            <Main_pub />

         </div>

      </div >

   );
}
