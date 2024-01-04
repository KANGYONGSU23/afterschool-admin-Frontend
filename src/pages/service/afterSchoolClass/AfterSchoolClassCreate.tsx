import ClassContainer from "../detail/ClassContainer";
import { HStack, VStack } from "@chakra-ui/react";
import PageHeader from "../../../components/services/common/PageHeader";
import styled from "@emotion/styled";
import InputContainer from "../detail/InputContainer";
import Button from "../../../components/services/common/Button";
import RadioContainer from "../../../components/services/common/RadioContainer";
import { useEffect, useState } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import Header from "../../../components/header";
import { useNavigate } from "react-router-dom";

interface FormType {
  grade: "ALL" | "1GRADE" | "2GRADE" | "3GRADE";
  gender: "ALL" | "MAN" | "WOMAN";
  day: "ALL" | "Monday" | "Wednesday";
}

const AfterSchoolClassCreate = () => {

  const onClickSave = () => {
    
    navigate("/main");
    alert("저장되었습니다");
  };
    

  const navigate = useNavigate();

  const [form, setForm] = useState<FormType>({
    grade: "ALL",
    gender: "ALL",
    day: "ALL",
  });

  const onChange = (name: keyof FormType, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <Header />
      <Container>
        <VStack>
          <PageHeader title="방과후 수업 등록" />
        </VStack>
        <Wrapper>
          <Container>
            <ClassContainer />

            <VStack display="flex" gap="30px" paddingTop="50px">
              <RadioContainer
                returnValue={(value) => {
                  onChange("grade", value);
                }}
                label="신청 대상"
                description="선택하지 않을 시에는 전체 학년에게 해당됩니다."
                radioItems={[
                  { label: "1학년", value: "1GRADE" },
                  { label: "2학년", value: "2GRADE" },
                  { label: "3학년", value: "3GRADE" },
                ]}
              />
              <RadioContainer
                returnValue={(value) => {
                  onChange("gender", value);
                }}
                label="성별 구분"
                description="선택하지 않을 시에는 전체 성별에게 해당됩니다."
                radioItems={[
                  { label: "남", value: "MAN" },
                  { label: "여", value: "WOMAN" },
                ]}
              />
            </VStack>

            <HStack display="flex" paddingTop="30px" gap="20px">
              <FormControl width="50%">
                <FormLabel>구분</FormLabel>
                <Select placeholder="구분 선택">
                  <option>개별 강좌</option>
                  <option>...</option>
                </Select>
              </FormControl>
              <RadioContainer
                returnValue={(value) => {
                  onChange("day", value);
                }}
                label=""
                description=""
                radioItems={[
                  { label: "월", value: "Monday" },
                  { label: "수", value: "Wednesday" },
                ]}
              />
            </HStack>
          </Container>
          <InputWrapper>
            <InputContainer />
            <ButtonContainer>
              <Button
                text="취소하기"
                width="25%"
                color="#000000"
                backgroundColor="#ffffff"
                onClick={()=>{navigate("/main")}}
              />
              <Button
                text="저장하기"
                width="25%"
                color="#ffffff"
                backgroundColor="#000000"
                onClick={onClickSave}
              />
            </ButtonContainer>
          </InputWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.div`
background-color: white;
  padding: 0 7%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  gap: 10px;
`;

export default AfterSchoolClassCreate;
