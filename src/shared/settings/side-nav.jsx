import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { IconLock, IconReceipt2, IconBuildingEstate, IconUserCircle } from '@tabler/icons-react';
import { getSession } from "@/lib/graphql/client";

const SideNav = () => {
  const session = getSession();
  const user = session.user;

  return (
    <div className="user-card-profile">
      <div className="d-flex mb-4">
  <div className="flex-shrink-0">
    <img src={user.photo? user.photo.url : '/img/placeholder.svg'} className="rounded-circle"/>
  </div>
  <div className="flex-grow-1 ms-3">
      <h5 class="profile__name d-block">{user.email}</h5>
				<span class="profile__email d-block">{user.id}</span>
  </div>
</div>

   
    <ListGroup flush>
    <ListGroupItem tag="a">
      <Link href="/account/settings"><IconUserCircle/> Il mio profilo</Link>
    </ListGroupItem>
    <ListGroupItem tag="a">
      <Link href="/account/settings/billing"><IconBuildingEstate/> La mia agenzia</Link>
    </ListGroupItem>
    <ListGroupItem tag="a">
      <Link href="/account/settings/security"><IconLock/> Password e sicurezza</Link>
    </ListGroupItem>
    <ListGroupItem tag="a">
      <Link href="/account/settings/billing"><IconReceipt2/> Fatturazione</Link>
    </ListGroupItem>
  </ListGroup>
      </div>
  )
}

export default SideNav;
