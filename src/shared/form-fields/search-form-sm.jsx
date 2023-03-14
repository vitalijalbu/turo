import { useForm } from "react-hook-form";
import {
  FormControl,
  InputLeftAddon,
  InputGroup,
  Input,
  Select,
  Button,
  InputRightAddon
} from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";
import AddressField from "./address-field";
import data from "@/data/categories.json";

function SearchForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="row">
      <form as="form" onSubmit={handleSubmit(onSubmit)} className="d-flex align-items-end">
      <InputGroup>
    <InputLeftAddon>
    <Select
            id="category"
            placeholder="Tipologia"
            {...register("category")}
          >
            {data.categories.map((category) => (
            <option key={category.slug} value={category.slug}>{category.title}</option>
            ))}
          </Select>
    </InputLeftAddon>
    <AddressField/>
    <InputRightAddon>
    <Button type="submit" colorScheme="green" leftIcon={<IconSearch/> }>
          Cerca
        </Button>
    </InputRightAddon>
  </InputGroup>
       
      </form>
    </div>
  );
}

export default SearchForm;
