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

export default function Spotlight() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme='gray' variant='outline'>In evidenza</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <CheckboxGroup>
                <Checkbox {...register("statusNew")}>New</Checkbox>
                <Checkbox {...register("statusUsed")}>Used</Checkbox>
              </CheckboxGroup>
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
