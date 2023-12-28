import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ServiceLayout = () => {
  const navigate = useNavigate();

  //TODO: token 없을 때 로그인으로 리다이렉트 로직
  useEffect(() => {
    if (0) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ServiceLayout;
