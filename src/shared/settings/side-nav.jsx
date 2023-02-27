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
  <div className="flex-shrink-0 avatr">
    <img src={user.photo?.url ?? '/img/placeholder.png'} className="avatar-lg rounded-circle"/>
  </div>
  <div className="flex-grow-1 ms-3">
      <h5 className="profile__name d-block">{user.fullName}</h5>
				<span className="profile__email d-block">{user.email}</span>
  </div>
</div>

   
    <ListGroup flush>
    <ListGroupItem tag="a">
      <Link href="/account/settings"><IconUserCircle/> Il mio profilo</Link>
    </ListGroupItem>
    <ListGroupItem tag="a">
      <Link href="/account/settings/company"><IconBuildingEstate/> La mia agenzia</Link>
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
