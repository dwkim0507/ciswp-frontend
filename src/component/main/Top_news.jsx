import { Link } from "react-router-dom";
import React from 'react'
import getnewsTop from '../../data/newsTop.json';

const SERVER_METHOD = 'getNewsTop';

export default function Top_news() {

   // const newsList = useFetch(SERVER_METHOD);
   const newsList = getnewsTop;

   return (
      <div class="container text-left mt-5">

         <h5>
            News & Events</h5>

         <table class="table table-bordered table-sm table-hover">
            <tbody >
               {newsList?.map((news) => (
                  <tr >
                     <div key={news._id}>
                        <td><Link to="/news" onClick={() => { window.scroll(0, 0); }}>
                           <div>{news.title.substring(0, 100)} {news.title.length >= 100 && '...'}
                           </div>
                           <div><i class="bi bi-clock"></i>
                              &nbsp;&nbsp;{news.date}
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
