import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../../common/interfaces/interfaces";

type articlesState = {
  isArticlesLoading: boolean;
  articlesList: IArticle[];
  error: string;
  totalResults: number;
};

const initialState: articlesState = {
  isArticlesLoading: false,
  articlesList: [],
  error: "",
  totalResults: 0,
};
interface ArticlesPayload {
  articlesList: IArticle[];
  totalResults: number;
}
export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    fetching(state) {
      state.isArticlesLoading = true;
    },
    fetchSuccess(state, action: PayloadAction<ArticlesPayload>) {
      state.isArticlesLoading = false;
      state.articlesList = action.payload.articlesList;
      state.totalResults = action.payload.totalResults;
      state.error = "";
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.isArticlesLoading = false;
      state.error = action.payload.message;
    },
  },
});
export const articlesReducer = articlesSlice.reducer;

//   },
// });
// export const { getPosts, setLoadingPosts, setPosts } = postsSlice.actions;
// const postsReducer = postsSlice.reducer;

// export default postsReducer;

// export const PostsSelectors = {
//   getPosts: (state: RootState) => state.posts.postsList,
// };
