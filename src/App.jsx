import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/search";
import TableComp from "./components/table";
import Footer from "./components/footer";
import Lottie from "lottie-react";
import Loader from "../public/loader.json";

function App() {
  const [loading, setLoading] = useState(false);
  const [curr, setCurr] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(25);
  let noofPages = 1;
  const [data, setData] = useState([]);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const callAll = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}`);
        noofPages = Math.ceil(res.data.length / 50);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    callAll();
  }, []);

  useEffect(() => {
    const call = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/?from=${curr}&perpage=${dataPerPage}`
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    call();
  }, [curr, dataPerPage]);

  if (loading) {
    return (
      <div className="  flex justify-center items-center w-screen h-screen border-2">
        <Lottie animationData={Loader} className="xsm:size-52 lg:size-96" />
      </div>
    );
  }
  return (
    <div className="xsm:mx-4 lg:mx-8">
      <div className="text-center mt-4 xsm:text-2xl  md:text-3xl font-bold font-verdana tracking-wider">
        <h1>DDCET RESULTS - 2024</h1>
      </div>
      <SearchBar data={data} setData={setData} />
      <Footer setCurr={setCurr} setDataPerPage={setDataPerPage} curr={curr} />
      <TableComp data={data} />
    </div>
  );
}

export default App;
