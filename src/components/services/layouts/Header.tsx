import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box as="header" w={"100%"} bgColor={"whitesmoke"} padding={"16px 40px"}>
            <Flex justify={"space-between"} alignItems={"center"}>
                <Link to="/services/after-school-course">
                    <Text textColor={"black"} fontSize="xl" fontWeight={"600"}>
                        Click
                    </Text>
                </Link>

                <Flex gap={12}>
                    <Link to="/services/after-school-course">
                        <Text textColor={"black"} fontSize="md">
                            코스 관리
                        </Text>
                    </Link>

                    <Link to="/services/after-school-class">
                        <Text textColor={"black"} fontSize="md">
                            강좌 관리
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
