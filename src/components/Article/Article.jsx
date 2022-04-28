import { useState } from "react";
import "./Article.scss";
export const todayDate = new Date().toISOString().slice(0, 10);

const Article = () => {
  const [date, setDate] = useState(todayDate);
  return (
    <article>
      <input
        type="date"
        name="date-picker"
        aria-label="date-picker"
        onChange={(event) => setDate(event.target.value)}
        value={date}
      />
    </article>
  );
};

export default Article;
