import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";


const AddressField = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = async (event) => {
    const query = event.target.value;
    setQuery(query);

    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&countrycodes=it&addressdetails=0&limit=5&q=${query}`
        );
        setResults(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      {results.length > 0 && (
        <div className="list media-list">
          <ul className="autocomplete">
        {results.map((result) => (
           <li key={result.place_id}>
           <Link href="#" className="item-link item-content">
             <div className="item-media">
               <IconSearch/>
             </div>
             <div className="item-inner">
               <div className="item-title">{result.display_name}</div>
             </div>
           </Link>
         </li>
        ))}
      </ul>
      </div>
      )}
    </div>
  );
};


export default AddressField;