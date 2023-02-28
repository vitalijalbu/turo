import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  
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
import SideNav from "@/shared/hosting/side-nav";
import PageActions from "@/shared/hosting/page-actions";
import PopupLayout from "layouts/popup";

const Info = () => {
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
              <h1 className="fs-2 mb-2">Dettagli annuncio</h1>
              <p className="mb-0">
            Praise effects wish change way and any wanted. Lively use looked latter
            regard had.
          </p>
            </div>
          </div>
          <Toolbar/>
          <div className="col-md-12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="refNumber">Riferimento personalizzato</FormLabel>
            <Input {...register("refNumber")} id="refNumber" type="text" />
          </FormControl>
          <FormControl flex={1} mr={4}>
            <FormLabel htmlFor="listingRatings">Stelle assegnate</FormLabel>
            <Input {...register("listingRatings")} id="listingRatings" type="number" />
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

export default Info;
