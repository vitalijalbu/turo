import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import data from "@/data/categories.json";
import sale from "@/data/listing.sale.json";
import status from "@/data/listing.status.json";
import SideNav from "@/shared/hosting/side-nav";
import PageActions from "@/shared/hosting/page-actions";
import PopupLayout from "layouts/popup";


const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <PopupLayout urlClose={'/account/listings'}>
    <div className="page">
      <div className="page-content">
        <div className="container-sm">
          <div className="row">
            <div className="py-2">
              <h1 className="fs-2 mb-2">Crea un nuovo annuncio</h1>
              <p className="mb-0">
            Praise effects wish change way and any wanted. Lively use looked latter
            regard had.
          </p>
            </div>
          </div>
          <div className="col-md-12 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="section-content pb-3 mb-3 border-bottom">
            <h2 className="section-title">Informazioni</h2>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="title">Titolo annuncio</FormLabel>
            <Input {...register("title", { required: true })} id="title" type="text" />
            {errors.title && <span>Title is required</span>}
          </FormControl>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="title">Tipologia di vendita</FormLabel>
            <RadioGroup name="form-name">
            {sale.map((sale) => (
                      <Radio value={sale.value}>{sale.label}</Radio>
                    ))}
            
          </RadioGroup>
            {errors.title && <span>Title is required</span>}
          </FormControl>
          </div>
          <div className="section-content pb-3 mb-3 border-bottom">
            <h2 className="section-title">Prezzi</h2>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="title">Titolo annuncio</FormLabel>
            <Input {...register("title", { required: true })} id="title" type="text" />
            {errors.title && <span>Title is required</span>}
          </FormControl>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="title">Tipologia di vendita</FormLabel>
            <RadioGroup name="form-name">
            {sale.map((sale) => (
                      <Radio value={sale.value}>{sale.label}</Radio>
                    ))}
            
          </RadioGroup>
            {errors.title && <span>Title is required</span>}
          </FormControl>
          </div>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="body">Descrizione</FormLabel>
            <Textarea {...register("body")} id="body" placeholder="Inserisci una descizione" rows="10"/>
          </FormControl>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="type">Property Type</FormLabel>
            <Select {...register("type", { required: true })} id="type">
              <option value="">Select property type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </Select>
            {errors.type && <span>Property type is required</span>}
          </FormControl>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="bedrooms">Bedrooms</FormLabel>
            <Select {...register("bedrooms", { required: true })} id="bedrooms">
              <option value="">Select number of bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            {errors.bedrooms && <span>Number of bedrooms is required</span>}
          </FormControl>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="bathrooms">Bathrooms</FormLabel>
            <Select {...register("bathrooms", { required: true })} id="bathrooms">
              <option value="">Select number of bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            {errors.bathrooms && <span>Number of bathrooms is required</span>}
          </FormControl>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="size">Size (sqft)</FormLabel>
            <Input {...register("size", { required: true, min: 0 })} id="size" type="number" />
            {errors.size && <span>Size is required and must be a positive number</span>}
          </FormControl>
      
          
        


          </form>
          </div>
          
          
        </div>
        <PageActions
        nextUrl={"/pricing"}
      />
      </div>
    </div>
    </PopupLayout>
  );
};

export default Create;
