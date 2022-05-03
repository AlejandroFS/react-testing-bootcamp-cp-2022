/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Article.scss";
import { useGetNasaData } from "./Hooks";
export const todayDate = "2020-05-05";
const Article = () => {
  const [date, setDate] = useState(todayDate);
  const dataResponse = useGetNasaData(date);

  return (
    <article>
      <input
        type="date"
        name="date-picker"
        aria-label="date-picker"
        onChange={(event) => setDate(event.target.value)}
        value={date}
      />
      {dataResponse && (
        <img src={dataResponse.url} alt="nasa-img" date={dataResponse.date} width="320px"/>
      )}
    </article>
  );
};

export default Article;
