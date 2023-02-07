import React, { useState, useRef } from "react";
import { Row, Col, Button, Form, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const PopupContact = ({ opened, onSubmit, toggle, data }) => {


  return (
    <Modal isOpen={opened} toggle={toggle} centered={true} fade={false}>
    <ModalHeader
      toggle={toggle}
    >
      {'Contatta l\'intersezionista'}
    </ModalHeader>
    <Form onValidSubmit={onSubmit} model={data || {}}>
      <ModalBody>
        <Row>
          <Col>
            <Input name="first_name" label="Nome" required />
          </Col>
          <Col>
            <Input name="last_name" label="Cognome" />
          </Col>
        </Row>
        <Input name="email" label="Indirizzo email" type="email" />
        <Input name="phone_number" label="Telefono" />
        <Input name="notes" label="Note (facoltativo)" type="textarea" />
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={toggle}>
          Chiudi
        </Button>
        <Button color="primary" type="submit">
          Salva
        </Button>
      </ModalFooter>
    </Form>
  </Modal>
  );
};

export default PopupContact;
