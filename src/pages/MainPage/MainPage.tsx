import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../common/hooks/redux";
import Filter from "../../components/Filter";
import Navigation from "../../components/Navigation";
import SingleArticle from "../../components/SingleArticle";
import fetchArticles from "../../redux/store/actionCreators/articlesActions";
import styles from "./MainPage.module.css";
import ReactPaginate from "react-paginate";

const ITEM_PER_PAGE = 10;

const MainPage = () => {
  const dispatch = useAppDispatch();
  const page = useRef(1);
  const { articlesList, isArticlesLoading, error, totalResults } =
    useAppSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles(page.current, ITEM_PER_PAGE));
  }, [dispatch]);

  const pageCount = Math.ceil(totalResults / ITEM_PER_PAGE);

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    page.current = selected + 1;
    dispatch(fetchArticles(page.current, ITEM_PER_PAGE));
  };

  return (
    <>
      <Navigation />
      <div className={styles.mainContainer}>
        <Filter />
        {isArticlesLoading && <p className="text-center text-lg">Loading</p>}
        {error && <p className="text-center text-lg text-red-600">{error}</p>}
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
          {articlesList.map((article) => (
            <SingleArticle
              key={article.source.id + Math.random()}
              article={article}
            />
          ))}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={page.current - 1}
        previousLabel="<"
        containerClassName="flex justify-center sticky bottom-0"
        pageClassName="py-1 px-2 border"
        previousClassName="py-1 px-2 border"
        nextClassName="py-1 px-2 border"
        activeClassName="bg-gray-500 text-white"
      />
    </>
  );
};

export default MainPage;
