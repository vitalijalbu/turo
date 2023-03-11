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
import ProgressBar from "@/shared/hosting/progress";
import HelpBox from "@/shared/components/help-box";
import data from "@/data/categories.json";
import sale from "@/data/listing.sale.json";
import status from "@/data/listing.status.json";
import SideNav from "@/shared/hosting/side-nav";
import PageActions from "@/shared/hosting/page-actions";
import PageHead from "@/shared/hosting/page-head";
const Performance = () => {
  const [progressValue, setProgressValue] = useState(10);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="page p-0">
      <div className="page-content">
        <PageHead />
        <div className="container">
          <div className="row">
            <div className="hosting-page">
              <div className="container">
                <h1 className="section-title">Promuovi annuncio</h1>
                <div className="row">
                  <div className="py-2">
                    <p className="mb-0">Compila i campi sottostanti</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="section-content pb-3 mb-3 border-bottom">
                        <h2 className="section-title">Informazioni</h2>

                        <FormControl flex={1} mr={4}>
                          <FormLabel htmlFor="title">
                            Tipologia di vendita
                          </FormLabel>
                          <RadioGroup name="form-name">
                            {sale.map((sale) => (
                              <Radio value={sale.value}>{sale.label}</Radio>
                            ))}
                          </RadioGroup>
                          {errors.title && <span>Title is required</span>}
                        </FormControl>
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

export default Performance;
