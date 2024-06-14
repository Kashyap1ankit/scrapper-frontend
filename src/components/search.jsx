import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";

export default function SearchBar({ data, setData }) {
  const [stdname, setStdName] = useState("");

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  async function handleClick() {
    try {
      const res = await axios.get(
        `${BASE_URL}/getStudentsData?stdname=${stdname}`
      );
      setData(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="xl:w-1/2 mt-12 mx-auto">
      <InputGroup size="md">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.500" />
        </InputLeftElement>
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Searh Your Result"
          onChange={(e) => {
            setStdName(e.target.value);
          }}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            colorScheme="green"
            onClick={handleClick}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
