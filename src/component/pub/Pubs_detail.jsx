import React from 'react';
import getPubs from '../../data/pubs.json';

export default function Pubs_deatil(props) {

   const pubList = getPubs.filter((pub) => pub.pubId.includes(props.pubId));

   return (
      <div class="container text-left mt-5">
         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h3 class="pt-0 ps-5"> Scientific Reports and Articles
            </h3>
         </div>

         <table class="pub_detail m-5">

            <tbody >
               {pubList?.map((pub) => (
                  <div class="ps-3 mt-1" key={pub._id}>
                     <tr>
                        <td class="pub_detail_head">Title </td>
                        <td>{pub.title}</td>
                     </tr>
                     <tr>
                        <td class="pub_detail_head">Author </td>
                        <td>{pub.author}</td>
                     </tr>
                     <tr>
                        <td class="pub_detail_head">Publisher </td>
                        <td>{pub.publisher}</td>
                     </tr>
                     <tr>
                        <td class="pub_detail_head">Year </td>
                        <td>{pub.year}</td>
                     </tr>
                     <tr>
                        <td class="pub_detail_head">Vol & Page</td>
                        <td>{pub.vol} {pub.page}</td>
                     </tr>
                  </div>

               ))}

            </tbody >

         </table>


      </div>



   );

}
