import { Button, Select } from "@chakra-ui/react";
import React from "react";

export default function Footer({ curr, setDataPerPage, setCurr }) {
  return (
    <div className="mt-6 mb-6 lg:flex justify-end">
      <div className="flex justify-evenly xsm:w-full xsm:mx-4 lg:mx-0 lg:w-1/6 mr-12 items-center">
        <label
          htmlFor="selectPlace"
          className="w-full text-gray-500 font-medium"
        >
          Results Per Page
        </label>
        <Select
          onChange={(e) => {
            setDataPerPage(e.target.value);
          }}
          id="selectPlace"
          className="w-fit"
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Select>
      </div>

      <div className="xsm:text-center xsm:mt-4 lg:mt-0 lg:mx-4">
        <Button
          onClick={() => {
            if (curr === 0) return;
            setCurr((prev) => prev - 50);
          }}
          className="mr-4"
        >
          <img src="prev.svg" className="size-7" />
        </Button>

        <Button
          onClick={() => {
            setCurr((prev) => prev + 50);
          }}
        >
          <img src="next.svg" className="size-6" />
        </Button>
      </div>
    </div>
  );
}
