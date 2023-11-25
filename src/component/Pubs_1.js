import React from 'react';
import { useState } from "react";
import useFetch from '../hooks/useFetch';
import Pagination from '../hooks/Pagination';
import getPubs from '../data/pubs.json';

let pubPageSize = 5;
const SERVER_METHOD = 'getPubs';

export default function Pubs_1() {

   // const pubList = useFetch(SERVER_METHOD);
   const pubList = getPubs;


   const [currentPage, setCurrentPage] = useState(1);
   const firstPageIndex = (currentPage - 1) * pubPageSize;
   const lastPageIndex = firstPageIndex + pubPageSize;
   const currentList = pubList.slice(firstPageIndex, lastPageIndex);

   return (
      <div class="container text-left mt-3">

         <h3>Scientific Reports and Articles</h3>

         <table class="table table-bordered m-3">
            <tbody >
               {currentList?.map((pub) => (
                  <tr >
                     <div key={pub._id}>

                        <td class="p-2">
                           <div>{pub.title}</div>
                           <div>{pub.author}</div>
                           <div>{pub.year}, {pub.publisher} {pub.vol} {pub.page} {pub.desc}</div>
                        </td>
                     </div>
                  </tr >
               ))}

            </tbody>
         </table>

         <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={pubList.length}
            pageSize={pubPageSize}
            onPageChange={page => setCurrentPage(page)}
         />
      </div>
   );

}
