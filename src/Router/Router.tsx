import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPage from "../pages/AuthenticationPage";
import MainPage from "../pages/MainPage";
import SingleArticlePage from "../pages/SingleArticlePage";

enum Pages {
  MainPage = "/",
  Auth = "/auth",
  SingleArticlePage = "/article/:id",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.MainPage} element={<MainPage />} />
        <Route path={Pages.Auth} element={<AuthenticationPage />} />
        <Route path={Pages.SingleArticlePage} element={<SingleArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
