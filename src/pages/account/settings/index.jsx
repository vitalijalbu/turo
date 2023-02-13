import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, Form, FormGroup, Label, FormText, Input } from 'reactstrap';
import { IconMessageCircle, IconBookmark } from '@tabler/icons-react';
import SideNav from '@/shared/settings/side-nav';

const Settings = () => {


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
      </Col>
    
    </div>
    
          </Container>
  );
};

export default Settings;
