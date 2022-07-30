import React from "react";
import { useNavigate } from "react-router-dom";
import { IArticle } from "../../common/interfaces/interfaces";
import styles from "./SingleArticle.module.css";
interface SingleArticleProps {
  article: IArticle;
}
const SingleArticle = ({ article }: SingleArticleProps) => {
  const navigate = useNavigate();
  // const clickHandler = () => navigate(`/article/${article.source.id}`);
  const clickHandler = () => navigate(`/article/${key}`);
  const key = `${article.source.id}${article.source.name}`;
  // const key = article.source.id + Math.random();
  // const clickHandler = () => navigate(`/article/${key}`);
  return (
    <div className={styles.articleWrapper} onClick={clickHandler}>
      <img src={article.urlToImage} alt="lost img"></img>
      <div>{article.publishedAt}</div>
      <div>{article.title}</div>
    </div>
  );
};

export default SingleArticle;
