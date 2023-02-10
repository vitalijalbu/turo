import React, { useState, useEffect } from "react";
import Link from "next/link";
import graphQLClient from "@/lib/graphql/client";

import { Modal, ModalBody, ModalHeader, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { viewRequest } from "@/lib/graphql/queries/requests";

const PopupStatus = ({ opened, toggle }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);



  return (
    <Modal
    centered
    fade={false}
    toggle={toggle}
    isOpen={opened}

  >
    <ModalHeader toggle={toggle}>Seleziona stato</ModalHeader>
      <ModalBody>
     demodemoedeode

    </ModalBody>
    <ModalFooter>
      <Button onClick={toggle}>Annulla</Button>
      <Button>Salva</Button>
    </ModalFooter>
  </Modal>
  )
}

export default PopupStatus;
