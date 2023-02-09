import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
  Label,
  Input, 
  FormText,
  Textarea
} from "reactstrap";
import PageActions from "@/shared/hosting/page-actions";
import { getAllCategories } from "@/lib/graphql/queries/categories";

const Index = () => {
  const [form, setFormValues] = useState({});
  console.log("👀 FORM here", form);
  /* Input change parent state */
  const handleOnChange = (e) => {
    setFormValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };


  return (
    <div className="page">
    <div className="page-content">
      <Container>
        <Row>
        <Col className="py-2">
          <h1 className="fs-2 mb-2">Modifica proprietà</h1>
          <p className="mb-0">
            Iniziamo dalle basi
          </p>
        </Col>

        </Row>
        <Row>
           <Col md={7}>
           <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Titolo
    </Label>
    <Input
      id="exampleEmail"
      name="title"
      type="title"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Seleziona categoria
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
    <Label for="excerpt">
      Descrizione
    </Label>
    <Input
      id="excerpt"
      name="excerpt"
      type="textarea"
      rows="10"
    />
  </FormGroup>
  <FormGroup tag="fieldset">
  <Label for="status">
  Stato
    </Label>
    <FormGroup check>
      <Input
        name="status"
        type="radio"
      />
     
      <Label check>
        Ristrutturato
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="status"
        type="radio"
      />
     
      <Label check>
        Ottimo
      </Label>
    </FormGroup>
    <FormGroup
      check
      disabled
    >
      <Input
        name="status"
        type="radio"
      />
     
      <Label check>
        Da ristrutturare
      </Label>
    </FormGroup>
  </FormGroup>
</Form>
            </Col> 
        </Row>
      </Container>
      <PageActions
        nextUrl={"/hosting/100/media"}
      />
    </div>
    </div>
  );
};

export default Index;
