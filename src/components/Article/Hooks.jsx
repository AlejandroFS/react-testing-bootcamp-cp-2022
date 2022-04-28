import axios from "axios";
import { useEffect, useState } from "react";
const url =
  "https://api.nasa.gov/planetary/apod?api_key=lnv8cNi7dt7TtNKRgLsml4U7zpwffmRsk0yDUuDi";

export const useGetNasaData = () => {
  const [dataResponse, setDataResponse] = useState();

  useEffect(() => {
    (async () => {
      setDataResponse((await axios.get(url)).data);
    })();
  }, []);

  return dataResponse;
};
