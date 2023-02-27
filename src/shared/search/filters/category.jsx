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
  Stack,
  Flex,
  Spacer,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Categories() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme='gray' variant='outline'>Categoria</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Stack pl={6} mt={1} spacing={1}>
        <Checkbox value="1">
          Attività con mura
        </Checkbox>
        <Checkbox>
        Attività senza mura
        </Checkbox>        
        <Checkbox>
        Mura
        </Checkbox>
      </Stack>
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
