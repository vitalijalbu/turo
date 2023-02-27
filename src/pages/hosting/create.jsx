import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Container,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import data from "@/data/categories.json";
import sale from "@/data/listing.sale.json";
import status from "@/data/listing.status.json";
import Toolbar from "@/shared/hosting/toolbar";
import PageActions from "@/shared/hosting/page-actions";


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
    <div className="page">
      <div className="page-content">
        <Container maxW="xl">
          <div>
            <div className="py-2">
              <h1 className="fs-2 mb-2">Dettagli annuncio</h1>
              <p className="mb-0">
            Praise effects wish change way and any wanted. Lively use looked latter
            regard had.
          </p>
            </div>
          </div>
          <Toolbar/>
          <div md={8} lg={8} sm={12}>
              <Box w="100%" p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input {...register("title", { required: true })} id="title" type="text" />
            {errors.title && <span>Title is required</span>}
          </FormControl>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input {...register("price", { required: true, min: 0 })} id="price" type="number" />
            {errors.price && <span>Price is required and must be a positive number</span>}
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
          </Box>
 
          </div>
          
          
        </div>
        <PageActions
        nextUrl={"/pricing"}
      />
      </div>
    </div>
  );
};

export default Create;
