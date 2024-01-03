import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box } from "@chakra-ui/layout";

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
            <Box height={"calc(100vh - 62px)"} width={"80%"} paddingTop={8} margin={"auto"}>
                <Outlet />
            </Box>
        </>
    );
};

export default ServiceLayout;
