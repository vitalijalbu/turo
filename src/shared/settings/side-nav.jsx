import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { IconLock, IconReceipt2, IconSettings, IconUserCircle } from '@tabler/icons-react';

const SideNav = () => {
  return (
    <div className="user-card-profile">
      <div className="d-flex mb-4">
  <div className="flex-shrink-0">
    <img src="https://via.placeholder.com/80" alt="..." className="rounded-circle"/>
  </div>
  <div className="flex-grow-1 ms-3">
      <h5 class="profile__name d-block">vity31</h5>
				<span class="profile__email d-block">v.jalbu31@gmail.com</span>
  </div>
</div>

   
    <ListGroup flush>
    <ListGroupItem tag="a">
      <Link href="/account/settings"><IconUserCircle/> Il mio profilo</Link>
    </ListGroupItem>
    <ListGroupItem tag="a">
      <Link href="/account/settings/billing"><IconReceipt2/> Fatturazione</Link>
    </ListGroupItem>
    <ListGroupItem tag="a">
      <Link href="/account/settings/security"><IconLock/> Password e sicurezza</Link>
    </ListGroupItem>
  </ListGroup>
      </div>
  )
}

export default SideNav;
