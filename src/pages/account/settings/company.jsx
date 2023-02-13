import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, Form, FormGroup, Label, FormText, Input } from 'reactstrap';
import { IconMessageCircle, IconBookmark } from '@tabler/icons-react';
import SideNav from '@/shared/settings/side-nav';

const Company = () => {


  return (
    
    <Container>
    <div className="row g-5">
    <div className="col-md-4">
        <div className="position-sticky" style={{ top: "2rem" }}>
          <div className="p-4">
          <SideNav/>
          </div>
        </div>
      </div>
      <Col md={8}>
        <h3 className="pb-4 mb-4 border-bottom">Impostazioni account</h3>
        <Form>
        <FormGroup>
    <Label for="email">
      Tipologia account
    </Label>
    <label class="form-selectgroup-item flex-fill">
                                <input type="radio" name="form-payment" value="mastercard" class="form-selectgroup-input" checked/>
                                <div class="form-selectgroup-label d-flex align-items-center p-3">
                                  <div class="me-3">
                                    <span class="form-selectgroup-check"></span>
                                  </div>
                                  <div>
                                    <span class="payment payment-provider-mastercard payment-xs me-2"></span>
                                    ending in <strong>2807</strong>
                                  </div>
                                </div>
                              </label>
  </FormGroup>
  <FormGroup>
    <Row>
      <Col>
      <Label for="email">
      Indirizzo email
    </Label>
    <Input
      id="email"
      name="email"
      type="email"
    />
      </Col>
      <Col>
      <Label for="email">
      Indirizzo email
    </Label>
    <Input
      id="email"
      name="email"
      type="email"
    />
      </Col>
    </Row>

  </FormGroup>
  <FormGroup>
    <Label for="email">
      Indirizzo email
    </Label>
    <Input
      id="email"
      name="email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="email">
      Indirizzo email
    </Label>
    <Input
      id="email"
      name="email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="firstName">
      Password
    </Label>
    <Input
      id="firstName"
      name="firstName"
      type="text"
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
 <h3 className="pb-4 mb-4 border-bottom">Impostazioni account</h3>
        <Form>
        <FormGroup>
    <Label for="email">
      Tipologia account
    </Label>
    <label class="form-selectgroup-item flex-fill">
                                <input type="radio" name="form-payment" value="mastercard" class="form-selectgroup-input" checked/>
                                <div class="form-selectgroup-label d-flex align-items-center p-3">
                                  <div class="me-3">
                                    <span class="form-selectgroup-check"></span>
                                  </div>
                                  <div>
                                    <span class="payment payment-provider-mastercard payment-xs me-2"></span>
                                    ending in <strong>2807</strong>
                                  </div>
                                </div>
                              </label>
  </FormGroup>
  <FormGroup>
    <Label for="email">
      Indirizzo email
    </Label>
    <Input
      id="email"
      name="email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="firstName">
      Password
    </Label>
    <Input
      id="firstName"
      name="firstName"
      type="text"
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
      </Col>
    
    </div>
    
          </Container>
  );
};

export default Company;
