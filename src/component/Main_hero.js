import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Main_hero_full from './Main_hero_full';
import Main_hero_short from './Main_hero_short';


export default function Main_body() {
   const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 1200 })
      return isDesktop ? children : null
   }
   const Tablet = ({ children }) => {
      const isTablet = useMediaQuery({ minWidth: 800, maxWidth: 1200 })
      return isTablet ? children : null
   }
   const Mobile = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 799 })
      return isMobile ? children : null
   }
   const Default = ({ children }) => {
      const isNotMobile = useMediaQuery({ minWidth: 800 })
      return isNotMobile ? children : null
   }

   return (
      <div>
         <Desktop><Main_hero_full /></Desktop>
         <Tablet><Main_hero_short /></Tablet>
         <Mobile><Main_hero_short /></Mobile>
         {/* <Default><Main_body_short /></Default> */}
      </div>
   );
}