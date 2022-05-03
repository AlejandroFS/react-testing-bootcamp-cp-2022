import axios from "axios";
import { useEffect, useState } from "react";
const url =
  "https://api.nasa.gov/planetary/apod?api_key=lnv8cNi7dt7TtNKRgLsml4U7zpwffmRsk0yDUuDi";

export const useGetNasaData = (date) => {
  const [dataResponse, setDataResponse] = useState();
  const [reqStatus, setRequestStatus] = useState(200);
  useEffect(() => {
    (async () => {
      try {
        const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=lnv8cNi7dt7TtNKRgLsml4U7zpwffmRsk0yDUuDi`;
        setDataResponse((await axios.get(url)).data);
        setRequestStatus(200);
      } catch (error) {
        setRequestStatus(error.response.status);
      }
    })();
  }, [date]);

  return [dataResponse, reqStatus];
};
