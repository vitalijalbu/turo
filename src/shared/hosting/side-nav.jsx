import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IconCoinEuro, IconCameraPlus, IconDots, IconMap2, Icon360View, IconBath, IconListDetails } from '@tabler/icons-react';
import { getSession } from "@/lib/graphql/client";

const SideNav = () => {
  const router = useRouter();
  const { id } = router.query;

  // Function to check if a given URL matches the current route
  const isActive = (url) => {
    return router.pathname === url;
  };
  return (
    <aside className="hosting-menu">
   <div className="list no-hairlines">
    <ul>
    <li key="hosting">
    <Link className={`nav-link ${isActive(`/hosting/${id}`) ? 'active' : ''}`} href={`/hosting/${id}`}>
             <div className="item-media">
               <IconListDetails/>
             </div>
             <div className="item-inner">
               <div className="item-title">Dettagli</div>
             </div>
           </Link>
         </li>    
         <li key="hosting">
           <Link href={`/hosting/${id}/rooms`} className="item-link item-content">
             <div className="item-media">
               <IconBath/>
             </div>
             <div className="item-inner">
               <div className="item-title">Locali e Camere</div>
             </div>
           </Link>
         </li>         
         <li key="hosting">
           <Link href={`/hosting/${id}/pricing`} className="item-link item-content">
             <div className="item-media">
               <IconCoinEuro/>
             </div>
             <div className="item-inner">
               <div className="item-title">Prezzi</div>
             </div>
           </Link>
         </li> 
         <li key="hosting">
           <Link href={`/hosting/${id}/location`} className="item-link item-content">
             <div className="item-media">
               <IconMap2/>
             </div>
             <div className="item-inner">
               <div className="item-title">Posizione</div>
             </div>
           </Link>
         </li> 
         <li key="hosting">
           <Link href={`/hosting/${id}/media`} className="item-link item-content">
             <div className="item-media">
               <Icon360View/>
             </div>
             <div className="item-inner">
               <div className="item-title">Virtual Tour</div>
             </div>
           </Link>
         </li>
         <li key="hosting">
           <Link href={`/hosting/${id}/photos`} className="item-link item-content">
             <div className="item-media">
               <IconCameraPlus/>
             </div>
             <div className="item-inner">
               <div className="item-title">Foto</div>
             </div>
           </Link>
         </li>
         <li key="hosting">
           <Link href={`/hosting/${id}/info`} className="item-link item-content">
             <div className="item-media">
               <IconDots/>
             </div>
             <div className="item-inner">
               <div className="item-title">Altre informazioni</div>
             </div>
           </Link>
         </li>
  </ul>
      </div>
      </aside>
  )
}

export default SideNav;
