import { Link } from "react-router-dom";
import React from 'react'
import getpubsTop from '../../data/pubsTop.json';

const SERVER_METHOD = 'getPubsTop';


export default function Main_pub() {
   // const pubList = useFetch(SERVER_METHOD);
   const pubList = getpubsTop;

   return (
      <div class="container text-left">
         <br />
         <h5>Publications</h5>

         <table class="table table-bordered table-sm table-hover">
            <tbody >
               {pubList?.map((pub) => (
                  <tr >
                     <div key={pub._id}>

                        <td><Link to="/pubs_1">
                           <div>{pub.title.substring(0, 90)} {pub.title.length >= 95 && '..'}
                           </div>
                           <div>{pub.author.substring(0, 40)} {pub.author.length >= 40 && '..'}
                              ({pub.year})</div>
                        </Link></td>
                     </div>
                  </tr>
               ))}

            </tbody>
         </table>

      </div>



   );
}
