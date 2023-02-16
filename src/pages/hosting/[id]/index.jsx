import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  Textarea,
} from "reactstrap";
import { useForm } from "react-hook-form";
import data from "@/data/categories.json";
import sale from "@/data/listing.sale.json";
import status from "@/data/listing.status.json";
import Toolbar from "@/shared/hosting/toolbar";
import PageActions from "@/shared/hosting/page-actions";


const Index = () => {
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
              <h1 className="fs-2 mb-2">Dettagli annuncio</h1>
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
                  <Label for="title">Titolo</Label>
                  <input
                    id="title"
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    {...register("title", { required: true })}
                  />
                   {errors.title && (
                  <div className="invalid-feedback">Name must be required</div>
                )}
                </FormGroup>
                <FormGroup tag="fieldset">
                  <Label for="status">Tipologia</Label>
                  {sale.data.map((sale) => (
                      <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={sale.value}
                        {...register("typeSale")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={sale.value}
                      >
                        {sale.label}
                      </label>
                    </div>
                      ))}
                </FormGroup>   
                <FormGroup>
                  <Label for="category">Seleziona categoria</Label>
                  <select
                    id="category"
                    className="form-select"
                    name="select"
                    type="select"
                    {...register("category")}
                  >
                     {data.categories.map((category) => (
                      <option value={category.id}>{category.title}</option>
                      ))}
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for="body">Descrizione</Label>
                  <textarea
                    id="body"
                    name="body"
                    className="form-control"
                    rows="10"
                    {...register("body")}
                  />
                </FormGroup>
                <FormGroup tag="fieldset">
                  <Label for="status">Stato</Label>
                  {status.data.map((status) => (
                      <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={status.value}
                        {...register("typeSale")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={status.value}
                      >
                        {status.label}
                      </label>
                    </div>
                      ))}
                </FormGroup>  
              </Form>
            </Col>
          </Row>
        </Container>
        <PageActions
        nextUrl={"/pricing"}
      />
      </div>
    </div>
  );
};

export default Index;
