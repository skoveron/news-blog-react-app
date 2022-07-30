import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleArticlePage.module.css";

const SingleArticlePage = () => {
  const params = useParams<"id">();
  return (
    <div className={styles.singleArticlePageWrapper}>
      <h1>Article {params.id}</h1>
    </div>
  );
};

export default SingleArticlePage;
