import React from "react";
import { useForm } from "@mantine/form";
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
//import HelpBox from "@/shared/hosting/HelpBox";

const Index = () => {
  const form = useForm({
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  return (
    <div className="page" id="searchPage">
      <Container>
        <Row>

        <Col className="text-center py-2">
          <h1 className="fs-2 mb-2">Add New Listing</h1>
          <p className="mb-0">
            Praise effects wish change way and any wanted. Lively use looked latter
            regard had.
          </p>
        </Col>

        </Row>
        <Row>
           <Col md={6} className="mx-auto">
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
    <Label for="exampleSelectMulti">
      Select Multiple
    </Label>
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
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
  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup>
  <FormGroup tag="fieldset">
    <legend>
      Radio Buttons
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
     
      <Label check>
        Option one is this and that—be sure to include why it‘s great
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
     
      <Label check>
        Option two can be something else and selecting it will deselect option one
      </Label>
    </FormGroup>
    <FormGroup
      check
      disabled
    >
      <Input
        disabled
        name="radio1"
        type="radio"
      />
     
      <Label check>
        Option three is disabled
      </Label>
    </FormGroup>
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
   
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
Copy
Form Feedback
            </Col> 
        </Row>
      </Container>
    </div>
  );
};

export default Index;
