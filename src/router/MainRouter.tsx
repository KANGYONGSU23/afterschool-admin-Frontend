import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages";
import Header from "../components/services/layouts/Header";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
