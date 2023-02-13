import React, { useState, useRef } from "react";
import { Row, Col, Button, Form, FormGroup, Label, FormText, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const PopupContact = ({ opened, onSubmit, toggle, data }) => {


  return (
    <Modal size="md" isOpen={opened} toggle={toggle} centered={true}>
    <ModalHeader
      toggle={toggle}
    >
      {'Contatta l\'intersezionista'}
    </ModalHeader>
    <ModalBody>
    <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Text Area
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>

  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
  </ModalBody>
  </Modal>
  );
};

export default PopupContact;
