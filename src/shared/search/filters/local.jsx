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
  Checkbox,
  Flex,
  SimpleGrid,
  Spacer,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Local() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme='gray' variant='outline'>Locali</Button>
      </PopoverTrigger>
      <PopoverContent className="filter-popover">
        <PopoverBody>
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Min</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Max</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </SimpleGrid>
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
