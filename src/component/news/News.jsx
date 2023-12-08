import React from 'react'
import { useState } from "react";
import useFetch from '../../hooks/useFetch';
import Pagination from '../../hooks/Pagination';
import getNews from '../../data/news.json';

let newsPageSize = 3;
const SERVER_METHOD = 'getNews';

export default function News() {

   // const newsList = useFetch(SERVER_METHOD);
   const newsList = getNews;

   const [currentPage, setCurrentPage] = useState(1);
   const firstPageIndex = (currentPage - 1) * newsPageSize;
   const lastPageIndex = firstPageIndex + newsPageSize;
   const currentList = newsList.slice(firstPageIndex, lastPageIndex);

   return (

      <div class="container text-left w-75">
         <h3 class="ms-3 mb-3">News & Events</h3>
         <table class="table table-bordered m-3">
            <tbody >
               {currentList?.map((news) => (
                  <tr >
                     <div key={news._id}>
                        <div><h5 class="m-3">{news.title}
                        </h5> </div>
                        <div><h6 class="m-3"><i class="bi bi-clock"></i>
                           &nbsp;&nbsp;{news.date}
                        </h6></div>
                        <div class="ms-5"
                           dangerouslySetInnerHTML={{ __html: news.autoMessage }} />
                     </div>
                  </tr>
               ))}

            </tbody>
         </table>

         <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={newsList.length}
            pageSize={newsPageSize}
            onPageChange={page => setCurrentPage(page)}
         />

      </div >

   );
}
