/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Article.scss";
import { useGetNasaData } from "./Hooks";
export const todayDate = new Date().toISOString().slice(0, 10);
const Article = () => {
  const [date, setDate] = useState(todayDate);
  const dataResponse = useGetNasaData();

  return (
    <article>
      <input
        type="date"
        name="date-picker"
        aria-label="date-picker"
        onChange={(event) => setDate(event.target.value)}
        value={date}
      />
      {dataResponse && <img src={dataResponse.url} alt="nasa-img" />}
    </article>
  );
};

export default Article;
