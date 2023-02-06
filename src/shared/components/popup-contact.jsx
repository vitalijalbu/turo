import React, { useState, useRef } from "react";
import { Modal } from 'reactstrap';



const PopupContact = ({ open, onSubmit, toggle, data }) => {


  return (
    <Modal isOpen={open} toggle={toggle} centered={true} fade={false}>
    <ModalHeader
      toggle={toggle}
      close={
        <button className="modal-close" onClick={toggle}>
          <Icon.X />
        </button>
      }
    >
      {data ? 'Modifica cliente' : 'Crea nuovo cliente'}
    </ModalHeader>
    <AvForm onValidSubmit={onSubmit} model={data || {}}>
      <ModalBody>
        <Row>
          <Col>
            <AvField name="first_name" label="Nome" required />
          </Col>
          <Col>
            <AvField name="last_name" label="Cognome" />
          </Col>
        </Row>
        <AvField name="email" label="Indirizzo email" type="email" />
        <AvField name="phone_number" label="Telefono" />
        <AddressField name="formatted_address" label="Indirizzo completo" />
        <AvField name="notes" label="Note (facoltativo)" type="textarea" />
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={toggle}>
          Chiudi
        </Button>
        <Button color="primary" type="submit">
          Salva
        </Button>
      </ModalFooter>
    </AvForm>
  </Modal>
  );
};

export default PopupContact;
