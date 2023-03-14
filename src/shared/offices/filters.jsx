import { useForm } from "react-hook-form";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  
} from "@chakra-ui/react";

function Filters() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
    <Box w="100%" p={4}>
      <Flex as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl flex={1} mr={4}>
          <FormLabel htmlFor="location">Location</FormLabel>
          <Input
            id="location"
            type="text"
            placeholder="Where are you going?"
            {...register("location")}
          />
        </FormControl>
        <FormControl flex={1} mr={4}>
          <FormLabel htmlFor="guests">Guests</FormLabel>
          <Select
            id="guests"
            placeholder="Select guests"
            {...register("guests")}
          >
            <option value={1}>1 guest</option>
            <option value={2}>2 guests</option>
            <option value={3}>3 guests</option>
            <option value={4}>4 guests</option>
          </Select>
        </FormControl> 
        <FormControl flex={1} mr={4}>
          <FormLabel htmlFor="guests">Guests</FormLabel>
          <Select
            id="guests"
            placeholder="Select guests"
            {...register("guests")}
          >
            <option value={1}>1 guest</option>
            <option value={2}>2 guests</option>
            <option value={3}>3 guests</option>
            <option value={4}>4 guests</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="green">
          Search
        </Button>
      </Flex>
    </Box>
    </div>
  );
}

export default Filters;
