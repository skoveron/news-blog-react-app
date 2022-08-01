import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "../../common/axios";
import { useDebounce } from "../../common/hooks/debounce";
import { useInput } from "../../common/hooks/input";
import { IArticle, ServerResponse } from "../../common/interfaces/interfaces";
import styles from "./Search.module.css";

const Search = () => {
  const navigate = useNavigate();
  const input = useInput("");
  const [dropdown, setDropdown] = useState(false);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const debounced = useDebounce(input.value);

  const AuthStr = "54ee2db275f04982a44c3132ae0f904e";

  async function searchArticles() {
    const response = await axios.get<ServerResponse<IArticle>>(`everything`, {
      params: { q: debounced, language: "en", pageSize: 10, apiKey: AuthStr },
    });
    setArticles(response.data.articles);
  }

  useEffect(() => {
    if (debounced.length > 3) {
      searchArticles().then(() => setDropdown(true));
    } else {
      setDropdown(false);
    }
  }, [debounced]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        {...input}
      />
      {dropdown && (
        <ul className="list-none absolute left-0 right-0 h-[200px] top-[42 px] shadow-md bg-white overflow-y-scroll">
          {articles.map((article) => {
            return (
              <li
                className="py-2 px-4 hover:bg-gray-500 hover:transition-colors cursor-pointer hover:text-white"
                key={article.source.id}
                onClick={() => navigate("/article/article.id")}
              >
                {article.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
