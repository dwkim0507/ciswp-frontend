import React from 'react';
import { Link } from "react-router-dom";

import getPubs from '../../data/pubs.json';
import styles from "./Research.module.css"

export default function Research_deatil(props) {
   const pubList = getPubs.filter((pub) => pub.project.includes(props.resID));

   return (
      <div class="container text-left">
         <div class="icon-box wow fadeInUp mt-5">
            <div class="icon"><i class="bi bi-stack"></i></div>
            <h4 class="pt-0 ps-5"> {props.title}
            </h4>
         </div>
         <div class={styles.re_info}>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Funding Agency:</span> {props.fund}
            </div>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Status:</span> {props.status}
            </div>
            <div class={styles.re_info_detail}>
               <span class={styles.re_info_detail_strong}>Description:</span> {props.desc}
            </div>

            <div class={styles.re_info_detail_strong}>
               Resources
            </div>
            <ul>
               {pubList?.map((pub) => (
                  <p class="ps-3 mt-1" key={pub._id}>
                     <Link to={
                        `/pubs_detail?id=${pub.pubId}`}
                        onClick={() => { window.scroll(0, 0); }}>
                        <li>{pub.title}</li>
                     </Link>

                  </p>
               ))}
            </ul>

         </div>



      </div >
   );

}
