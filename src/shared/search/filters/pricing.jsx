import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Spacer,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Pricing() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme='gray' variant='outline'>Prezzi</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Pricing Min</FormLabel>
              <Input type="number" {...register("pricingMin")} />
            </FormControl>
            <FormControl>
              <FormLabel>Pricing Max</FormLabel>
              <Input type="number" {...register("pricingMax")} />
            </FormControl>
            <Flex className="filter-popover_footer">
            <Button variant="outline">Chiudi</Button>
            <Spacer />
            <Button type="submit" colorScheme='blue'>Applica</Button>
            </Flex>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
