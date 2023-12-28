import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "@chakra-ui/layout";

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
      <Container height={"calc(100vh - 62px)"} overflowY={"scroll"}>
        <Outlet />
      </Container>
    </>
  );
};

export default ServiceLayout;
