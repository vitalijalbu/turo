import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
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
import Toolbar from "@/shared/hosting/toolbar";

const Media = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="page">
    <div className="page-content">
      <Container>
        <Row>

        <Col className="py-2">
          <h1 className="fs-2 mb-2">Foto e Video</h1>
          <p className="mb-0">
            Praise effects wish change way and any wanted. Lively use looked latter
            regard had.
          </p>
        </Col>

        </Row>
        <Toolbar/>
        <Row>
           <Col md={8} lg={8} sm={12}>
           <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Label for="title">Video URL</Label>
                  <input
                    id="title"
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    {...register("title", { required: true })}
                  />
                   {errors.title && (
                  <div className="invalid-feedback">Name must be required</div>
                )}
                </FormGroup> 
                <FormGroup>
                  <Label for="title">Virtual Tour URL</Label>
                  <input
                    id="title"
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    {...register("title", { required: true })}
                  />
                   {errors.title && (
                  <div className="invalid-feedback">Name must be required</div>
                )}
                </FormGroup>
                </Form>
          </Col>
        </Row>
      </Container>
      <PageActions
        prevUrl={"/location"}
        nextUrl={"/info"}
      />
    </div>
    </div>
  );
};

export default Media;