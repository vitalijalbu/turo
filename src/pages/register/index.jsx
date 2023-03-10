import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Center,
  Text,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { authAction } from "@/lib/graphql/mutations/auth";
import IconFacebook from "@/shared/components/icons/IconFacebook";
import IconGoogle from "@/shared/components/icons/IconGoogle";


const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registrationType, setRegistrationType] = useState("business");

  const onSubmit = (data) => {
    console.log(data); // Submit form data to the server
  };

  const handleRegistrationTypeChange = (value) => {
    setRegistrationType(value);
  };
  return (
    <div className="page">
      <div className="page-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 mx-auto">
              <h3 className="mb-4 text-center">Ti diamo il benvenuto su Resthotels</h3>
              {/* Google and facebook Button */}
              <div className="vstack gap-3">
                 {/* Facebook */}
       <Button w={'full'} colorScheme={'facebook'} leftIcon={<IconFacebook />} mb="2">
          <Center>
            <Text>Continua con Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<IconGoogle />}>
          <Center>
            <Text>Accedi con Google</Text>
          </Center>
        </Button>
              </div>
              {/* Divider */}
              <div className="position-relative my-4">
                <hr />
                <p className="small bg-white position-absolute top-50 start-50 translate-middle px-2">
                  Oppure
                </p>
              </div>

              {/* Form START */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4}>
          <FormLabel htmlFor="registrationType">Registration Type</FormLabel>
          <RadioGroup
            id="registrationType"
            value={registrationType}
            
          >
            <Stack direction="row">
              <Radio value="personal" onChange={(e) => handleRegistrationTypeChange(e.target.value)}>Personal</Radio>
              <Radio value="business" onChange={(e) => handleRegistrationTypeChange(e.target.value)}>Business</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {registrationType === "personal" ? (
          <>
            <FormControl mb={4}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input {...register("name", { required: true })} id="name" type="text" />
              {errors.name && <Text color="red">Name is required</Text>}
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="surname">Surname</FormLabel>
              <Input {...register("surname", { required: true })} id="surname" type="text" />
              {errors.surname && <Text color="red">Surname is required</Text>}
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input {...register("email", { required: true })} id="email" type="email" />
              {errors.email && <Text color="red">Email is required</Text>}
            </FormControl>
          </>
        ) : (
          <>
            <FormControl mb={4}>
              <FormLabel htmlFor="companyName">Company Name</FormLabel>
              <Input {...register("companyName", { required: true })} id="companyName" type="text" />
              {errors.companyName && <Text color="red">Company name is required</Text>}
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="vatNumber">VAT Number</FormLabel>
              <Input {...register("vatNumber", { required: true })} id="vatNumber" type="text" />
              {errors.vatNumber && <Text color="red">VAT number is required</Text>}
            </FormControl>
          </>
        )}

        <Button type="submit" colorScheme="blue" mt={4}>
          Crea account
        </Button>
      </form>

     {/* Form END */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
