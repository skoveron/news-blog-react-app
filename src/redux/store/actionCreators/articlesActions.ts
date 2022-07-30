import React, { Dispatch } from "react";
import { AppDispatch } from "..";
import axios from "../../../common/axios";
import { articlesSlice } from "../../reducers/articles";
import {
  ServerResponse,
  IArticle,
} from "../../../common/interfaces/interfaces";

const fetchArticles = (page = 1, pageSize = 30) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(articlesSlice.actions.fetching);
      const AuthStr = "54ee2db275f04982a44c3132ae0f904e";
      const keywords = "bitcoin";
      const url = `everything?q=${keywords}&apiKey=${AuthStr}`;
      const response = await axios.get<ServerResponse<IArticle>>(url, {
        params: { page, pageSize },
      });
      dispatch(
        articlesSlice.actions.fetchSuccess({
          articlesList: response.data.articles,
          totalResults: response.data.totalResults,
        })
      );
    } catch (error) {
      dispatch(articlesSlice.actions.fetchError(error as Error));
    }
  };
};

export default fetchArticles;
