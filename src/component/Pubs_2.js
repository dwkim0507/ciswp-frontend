
import React from 'react';
import YouTube from 'react-youtube';
import { useState } from "react";
import useFetch from '../hooks/useFetch';
import Pagination from '../hooks/Pagination';
import getWebinars from '../data/webinars.json';

const SERVER_METHOD = 'getWebinars';

let webPageSize = 5;

function Pubs_2() {

   const opts = {
      width: '300',
      height: '200',

      playerVars: {
         autoplay: 0,
      },
   };

   // const webinarList = useFetch(SERVER_METHOD);
   const webinarList = getWebinars;


   // const [webinarList, setWebinarList] = useState(null);
   // const subject = 'Healthcare';
   // const fetchData = async () => {
   //    const response = await axios.get(SERVER_URL);
   //    setWebinarList(response.data.filter(webinar => (webinar.subject === subject)));
   // }

   const [currentPage, setCurrentPage] = useState(1);
   const firstPageIndex = (currentPage - 1) * webPageSize;
   const lastPageIndex = firstPageIndex + webPageSize;
   const currentTableData = webinarList.slice(firstPageIndex, lastPageIndex);

   return (
      <div class="container text-left mt-3">

         <h3>Webinars</h3>

         <table class="table table-bordered m-3">
            <tbody >
               {currentTableData?.map((webinar) => (
                  <tr >
                     <div key={webinar._id}>
                        <td class="p-3">
                           <YouTube videoId={webinar.videoId} opts={opts} />
                        </td>
                        <td class="p-3">
                           <div><h5>{webinar.title}</h5>
                           </div>
                           <div><h6><i class="bi bi-clock"></i>
                              &nbsp;&nbsp;{webinar.date}
                           </h6></div>
                           <p>{webinar.desc}</p>
                        </td>
                     </div>
                  </tr>
               ))}

            </tbody>
         </table>
         <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={webinarList.length}
            pageSize={webPageSize}
            onPageChange={page => setCurrentPage(page)}
         />
      </div>

   );

}

export default Pubs_2;
