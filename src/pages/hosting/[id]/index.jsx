import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Stack,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import HelpBox from "@/shared/components/help-box";
import data from "@/data/categories.json";
import sale from "@/data/listing.sale.json";
import status from "@/data/listing.status.json";
import SideNav from "@/shared/hosting/side-nav";
import PageActions from "@/shared/hosting/page-actions";
import PageHead from "@/shared/hosting/page-head";
import { IconCurrencyEuro, IconFileInvoice, IconCoinEuro, IconCameraPlus, IconDots, IconMap2, Icon360View, IconBath, IconListDetails, IconBrandYoutube } from "@tabler/icons-react";


const Index = () => {
  const [progressValue, setProgressValue] = useState(10);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="page">
      <div className="page-content">
        <PageHead />
        <div className="container">
          <div className="row">
            <div className="hosting-page">
              <div className="container">
                <h1 className="section-title">Informazioni annuncio</h1>
                <div className="row">
                  <div className="py-2">
                    <p className="mb-0">Compila i campi sottostanti</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* NEW SECTION */}
                      <div className="section-content pb-3 mb-3 border-bottom">
                        <h2 className="section-title">Informazioni</h2>
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="title">Titolo annuncio</FormLabel>
                          <Input
                            {...register("title", { required: true })}
                            id="title"
                            type="text"
                          />
                          {errors.title && <span>Title is required</span>}
                        </FormControl>
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="title">
                            Tipologia di vendita
                          </FormLabel>
                          <RadioGroup name="form-name">
                          <Stack direction='row'>
                            {sale.map((sale) => (
                              <Radio value={sale.value}>{sale.label}</Radio>
                            ))}
                            </Stack>
                          </RadioGroup>
                          {errors.title && <span>Title is required</span>}
                        </FormControl>
                        <div className="row">
                        <div className="col">
                      <FormControl flex={1} mr={4}>
                        <FormLabel htmlFor="type">Tipologia</FormLabel>
                        <Select
                          {...register("type", { required: true })}
                          id="type"
                        >
                          <option value="">Select property type</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="condo">Condo</option>
                        </Select>
                        {errors.type && <span>Property type is required</span>}
                      </FormControl>
                      </div>
                      <div className="col">
                      <FormControl flex={1} mr={4}>
                        <FormLabel htmlFor="bedrooms">Bedrooms</FormLabel>
                        <Select
                          {...register("bedrooms", { required: true })}
                          id="bedrooms"
                        >
                          <option value="">Select number of bedrooms</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Select>
                        {errors.bedrooms && (
                          <span>Number of bedrooms is required</span>
                        )}
                      </FormControl>
                      </div>
                      </div>
                      <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="body">Descrizione</FormLabel>
                          <Textarea
                            {...register("body")}
                            id="body"
                            placeholder="Inserisci una descizione"
                            rows="10"
                          />
                        </FormControl>
                        
                        </div>
             
                      {/* NEW SECTION */}
                      <div className="section-content pb-3 mb-3 border-bottom">
                        <h2 className="section-title">Foto e Video</h2>
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <p>
                          Trascina e rilascia qui alcuni file o fai clic per selezionare i file
                          </p>
                        </div>
                        <aside>
                          <h4>Foto</h4>
                          <ul>{files}</ul>
                        </aside>
                      </div>
                      {/* NEW SECTION */}
                      <div className="section-content pb-3 mb-3 border-bottom">
                        <h2 className="section-title">Prezzi</h2>
                        <div className="row">
                        <div className="col">
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="pricing">Prezzo mura</FormLabel>
                          <InputGroup>
    <InputLeftAddon children={<IconCurrencyEuro/>} />
    <Input
                            {...register("pricing")}
                            id="pricing"
                            type="text"
                          />

  </InputGroup>
                         
                        </FormControl> 
                        </div>
                        <div className="col">
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="pricing">Prezzo attvità</FormLabel>
                          <Input
                            {...register("pricing")}
                            id="pricing"
                            type="text"
                          />
                        </FormControl>
                        </div>
                        </div>
                      </div> 
                      {/* NEW SECTION */}
                       <div className="section-content pb-3 mb-3 border-bottom">
                        <h2 className="section-title">Caratteristiche</h2>
                        <div className="row">
                        <div className="col">
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="yearConstruction">Anno di costruzione</FormLabel>

    <Input
                            {...register("yearConstruction")}
                            id="yearConstruction"
                            type="text"
                          />
                         
                        </FormControl> 
                        </div>
                        <div className="col">
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="pricing">Prezzo attvità</FormLabel>
                          <Input
                            {...register("pricing")}
                            id="pricing"
                            type="text"
                          />
                        </FormControl>
                        </div>
                        </div>
                      </div>
                      <div className="section-content pb-3 mb-3 border-bottom">
                        <h2 className="section-title">Video e Virtual Tour</h2>
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="linkVirtualTour">URL</FormLabel>
                          <InputGroup>
    <InputLeftAddon children={<Icon360View/>} />
    <Input
                            {...register("pricing")}
                            id="pricing"
                            type="text"
                          />

  </InputGroup>
                        </FormControl>
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="linkVideo">URL</FormLabel>
                          <InputGroup>
    <InputLeftAddon children={<IconBrandYoutube/>} />
    <Input
                            {...register("pricing")}
                            id="pricing"
                            type="text"
                          />

  </InputGroup>
                          {errors.title && <span>Title is required</span>}
                        </FormControl>
                      </div>

                      <FormControl flex={1} mr={4}>
                        <FormLabel htmlFor="bathrooms">Bathrooms</FormLabel>
                        <Select
                          {...register("bathrooms", { required: true })}
                          id="bathrooms"
                        >
                          <option value="">Select number of bathrooms</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Select>
                        {errors.bathrooms && (
                          <span>Number of bathrooms is required</span>
                        )}
                      </FormControl>
                      <FormControl flex={1} mr={4}>
                        <FormLabel htmlFor="size">Size (sqft)</FormLabel>
                        <Input
                          {...register("size", { required: true, min: 0 })}
                          id="size"
                          type="number"
                        />
                        {errors.size && (
                          <span>
                            Size is required and must be a positive number
                          </span>
                        )}
                      </FormControl>
                                            {/* NEW SECTION */}
                                            <div className="section-content pb-3 mb-3 border-bottom">
                        <h2 className="section-title">Dettagli finanziari</h2>
                        <div className="row">
                        <div className="col">
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="annualRevenue">Fatturato anno precedente</FormLabel>
                          <InputGroup>
    <InputLeftAddon children={<IconFileInvoice/>} />
    <Input
                            {...register("annualRevenue")}
                            id="annualRevenue"
                            type="text"
                          />

  </InputGroup>
                         
                        </FormControl> 
                        </div>
                        <div className="col">
                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="pricing">Prezzo attvità</FormLabel>
                          <Input
                            {...register("pricing")}
                            id="pricing"
                            type="text"
                          />
                        </FormControl>
                        </div>
                        </div>
                        
                        </div>
                
                    </form>
                  </div>
                  <div className="col-md-4">
                    <HelpBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    
      </div>
    </div>
  );
};

export default Index;
