import { Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function SearchBar({ data, setData }) {
  let timer = useRef(null);
  const [stdname, setStdName] = useState("");
  const [filter, setFilter] = useState("candidateName");

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  //Function to call api

  async function handleClick() {
    try {
      const res = await axios.get(
        `${BASE_URL}/getStudentsData?filter=${filter}&value=${stdname}`
      );
      setData(res.data);
    } catch (error) {
      console.log("error");
    }
  }

  //Whenever the stdname changes then the call goes

  useEffect(() => {
    handleClick();
  }, [stdname, filter]);

  //Handling the state variable change more precisely

  function debouncedChangeCall(value) {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setStdName(value);
    }, 2000);
  }

  return (
    <div className="mt-12 mx-auto lg:flex  lg:justify-evenly">
      <div className="lg:w-3/4">
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.500" />
          </InputLeftElement>
          <Input
            pr="4.5rem"
            type={"text"}
            placeholder="Searh Your Result"
            onChange={(e) => {
              debouncedChangeCall(e.target.value);
            }}
          />
        </InputGroup>
      </div>

      <div className="xsm:mt-4 lg:mt-0">
        <Select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          variant="filled"
          defaultValue={"candidateName"}
        >
          <option value={"candidateName"}>Candidate Name</option>
          <option value={"applicationNo"}>Application No</option>
          <option value={"rank"}>Rank</option>
          <option value={"marksSecured"}>Marks</option>
          <option value={"programme"}>Programme</option>
          <option value={"fathersName"}>Father's Name</option>
        </Select>
      </div>
    </div>
  );
}
