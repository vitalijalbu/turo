import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Avatar } from '@chakra-ui/react';
import { IconLock, IconReceipt2, IconBuildingEstate, IconUserCircle } from '@tabler/icons-react';
import { getSession } from "@/lib/graphql/client";

const SideNav = () => {
  const session = getSession();
  const user = session.user;

  return (
    <div className="user-card-profile">
      <div className="d-flex mb-4">
  <div className="flex-shrink-0 avatr">
    <Avatar src={user.photo?.url ?? '/img/placeholder.png'} size="md"/>
  </div>
  <div className="flex-grow-1 ms-3">
      <h5 className="profile__name d-block">{user.fullName}</h5>
				<span className="profile__email d-block">{user.email}</span>
  </div>
</div>

   <div className="list">
    <ul>
    <li key="setting">
           <Link href="/account/settings" className="item-link item-content">
             <div className="item-media">
               <IconUserCircle/>
             </div>
             <div className="item-inner">
               <div className="item-title"> Il mio profilo</div>
             </div>
           </Link>
         </li>    
         <li key="setting">
           <Link href="/account/settings/office" className="item-link item-content">
             <div className="item-media">
               <IconBuildingEstate/>
             </div>
             <div className="item-inner">
               <div className="item-title"> La mia agenzia</div>
             </div>
           </Link>
         </li>         
         <li key="setting">
           <Link href="/account/settings/security" className="item-link item-content">
             <div className="item-media">
               <IconLock/>
             </div>
             <div className="item-inner">
               <div className="item-title">Password e sicurezza</div>
             </div>
           </Link>
         </li> 
         <li key="setting">
           <Link href="/account/settings/billing" className="item-link item-content">
             <div className="item-media">
               <IconReceipt2/>
             </div>
             <div className="item-inner">
               <div className="item-title">Fatturazione</div>
             </div>
           </Link>
         </li>
  </ul>
      </div>
      </div>
  )
}

export default SideNav;
