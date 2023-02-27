import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
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
import IconFacebook from "@/shared/components/IconFacebook";
import IconGoogle from "@/shared/components/IconGoogle";


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
      <div className="container">
    <Box w="100%" p={4}>
      <Heading>Crea il tuo account</Heading>
      <Box py="4">
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
        </Box>
        <hr my="3"/>
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
    </Box>
    </div>
    </div>
  );
};
export default Index;
