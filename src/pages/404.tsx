import { Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <VStack justify={"center"} h={"100vh"}>
      <Text fontSize={"4xl"} fontWeight={"600"}>
        404
      </Text>
      <Text fontSize={"2xl"}>페이지를 찾을 수 없습니다.</Text>
      <Text
        fontSize={"md"}
        w={"500px"}
        whiteSpace={"pre-line"}
        textAlign={"center"}
      >
        {`지금 입력하신 페이지 주소가 존재하지 않거나 
다른 페이지로 변경되어 찾을 수 없습니다. 주소를 다시 확인해주세요.`}
      </Text>

      <Button onClick={() => navigate(-1)} marginTop={6}>
        이전 페이지로
      </Button>
    </VStack>
  );
};

export default NotFoundPage;
