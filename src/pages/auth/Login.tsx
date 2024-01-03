import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, getValues } = useForm();

  const onClickLogin = () => {
    //TODO: API 연동 필요, onSuccess후 Navigate
    const { id, password } = getValues();
    if (id !== "kodomo1234" && password!=="kodomo1234") {
      alert("계정이 올바르지 않습니다.");
      return;
    }

    navigate("/main");
    alert("로그인 되었습니다.");
  };
    

  return (
    <Center w={"100%"} h={"100vh"} backgroundColor={"gray.100"}>
      <form>
        <VStack
          backgroundColor={"gray.50"}
          rounded={12}
          padding={"40px 80px"}
          gap={8}
          width={"500px"}
          boxShadow={"md"}
        >
          <Heading fontSize={"x-large"} fontWeight={600}>
            로그인
          </Heading>

          <VStack width={"400px"} paddingY={"20px"} gap={8}>
            <FormControl>
              <FormLabel>아이디</FormLabel>
              <Input
                {...register("id", { required: "This is Required" })}
                placeholder="아이디를 입력하세요"
              />
            </FormControl>

            <FormControl>
              <FormLabel>비밀번호</FormLabel>
              <Input
                {...register("password", { required: "This is Required" })}
                placeholder="비밀번호를 입력하세요"
              />
            </FormControl>
          </VStack>

          <Button onClick={handleSubmit(onClickLogin)}>로그인</Button>
        </VStack>
      </form>
    </Center>
  );
};

export default LoginPage;