import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/search";
import TableComp from "./components/table";

function App() {
  const [data, setData] = useState([]);

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const call = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/all`);
        setData(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    call();
  }, []);
  return (
    <div>
      <SearchBar data={data} setData={setData} />
      <TableComp data={data} />
    </div>
  );
}

export default App;
