
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

import {
   MDBTabs,
   MDBTabsItem,
   MDBTabsLink,
   MDBTabsContent,
   MDBTabsPane
} from 'mdb-react-ui-kit';

import YouTube from 'react-youtube';
import Pagination from '../hooks/Pagination';
import getWebinars from '../data/webinars.json';

const SERVER_METHOD = 'getWebinars';

let webPageSize = 3;


export default function Pubs_3() {

   const tapMenu = ["All", "Healthcare", "Workforce Development", "Work from Home", "Work Disability Management"];
   const [basicActive, setBasicActive] = useState('tab1');


   const handleBasicClick = (value) => {
      if (value === basicActive) {
         return;
      }

      setBasicActive(value);
   };

   return (
      <div class="container text-left mt-3">

         <h3>Webinars</h3>

         <MDBTabs class='nav nav-underline ms-5'>
            <MDBTabsItem>
               <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                  <span class="text-secondary px-3">{tapMenu[0]}</span>
               </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
               <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                  <span class="text-secondary px-3">{tapMenu[1]}</span>
               </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
               <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                  <span class="text-secondary px-3">{tapMenu[2]}</span>
               </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
               <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                  <span class="text-secondary px-3">{tapMenu[3]}</span>
               </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
               <MDBTabsLink onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>
                  <span class="text-secondary px-3">{tapMenu[4]}</span>
               </MDBTabsLink>
            </MDBTabsItem>
         </MDBTabs>

         <MDBTabsContent>
            <MDBTabsPane show={basicActive === 'tab1'}><Pub_3_fetchAll /></MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab2'}><Pub_3_fetch filter={tapMenu[1]} /></MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab3'}><Pub_3_fetch filter={tapMenu[2]} /></MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab4'}><Pub_3_fetch filter={tapMenu[3]} /></MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab5'}><Pub_3_fetch filter={tapMenu[4]} /></MDBTabsPane>
         </MDBTabsContent>

      </div>

   );


   function Pub_3_fetch({ filter }) {

      const opts = {
         width: '300',
         height: '200',

         playerVars: {
            autoplay: 0,
         },
      };

      const webinarList = getWebinars.filter(webinar => (webinar.subject === filter));
      const [currentPage, setCurrentPage] = useState(1);
      const firstPageIndex = (currentPage - 1) * webPageSize;
      const lastPageIndex = firstPageIndex + webPageSize;
      const currentList = webinarList.slice(firstPageIndex, lastPageIndex);

      return (
         <div>
            <table class="table table-bordered m-3">
               <tbody >
                  {currentList?.map((webinar) => (
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

   function Pub_3_fetchAll() {

      const opts = {
         width: '300',
         height: '200',

         playerVars: {
            autoplay: 0,
         },
      };

      // const webinarList = useFetch(SERVER_METHOD);
      const webinarList = getWebinars;


      const [currentPage, setCurrentPage] = useState(1);
      const firstPageIndex = (currentPage - 1) * webPageSize;
      const lastPageIndex = firstPageIndex + webPageSize;
      const currentList = webinarList.slice(firstPageIndex, lastPageIndex);

      return (
         <div>
            <table class="table table-bordered m-3">
               <tbody >
                  {currentList?.map((webinar) => (
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

}
