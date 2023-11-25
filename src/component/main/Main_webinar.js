import { Link } from "react-router-dom";
import React from 'react'
import YouTube from 'react-youtube';
import getwebinarsTop from '../../data/webinarsTop.json';

const SERVER_METHOD = 'getWebinarsTop';

export default function Main_webinar() {
   const opts = {
      width: '100',
      height: '85',

      playerVars: {
         autoplay: 0,
         controls: 0,

      },
   };

   // const webinarList = useFetch(SERVER_METHOD);
   const webinarList = getwebinarsTop;


   return (
      <div class="container text-left">
         <br />

         <h5>Webinars</h5>

         <table class="table table-bordered table-sm table-hover">
            <tbody >
               {webinarList?.map((webinar) => (
                  <tr>
                     <div key={webinar._id}>
                        <td>
                           <YouTube videoId={webinar.videoId} opts={opts} />
                        </td>
                        <td class="ps-3"><Link to="/pubs_3">
                           <div>{webinar.title.substring(0, 95)} {webinar.title.length >= 95 && '...'}
                           </div>
                        </Link></td>
                     </div>

                  </tr>
               ))}

            </tbody>
         </table>

      </div>



   );
}
