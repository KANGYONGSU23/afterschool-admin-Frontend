import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box as="header" w={"100%"} bgColor={"whitesmoke"} padding={"16px 40px"}>
      <Flex justify={"space-between"} alignItems={"center"}>
        <Link to="/services">
          <Text textColor={"black"} fontSize="xl" fontWeight={"600"}>
            Click
          </Text>
        </Link>

        <Link to="/my-info">
          <Text textColor={"black"} fontSize="md">
            코스 관리
          </Text>
        </Link>

        <Link to="/my-info">
          <Text textColor={"black"} fontSize="md">
            강좌 관리
          </Text>
        </Link>

        <Link to="/my-info">
          <Text textColor={"black"} fontSize="md">
            정보 수정
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
