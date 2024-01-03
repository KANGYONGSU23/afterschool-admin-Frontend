import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DatePicker from "../../../components/services/common/DatePicker";
import PageHeader from "../../../components/services/common/PageHeader";
import RadioContainer from "../../../components/services/common/RadioContainer";

interface FormType {
  courseName: string;
  grade: "ALL" | "1GRADE" | "2GRADE" | "3GRADE";
  gender: "ALL" | "MAN" | "WOMAN";
  startApplication: string;
  endApplication: string;
  startClassPeriod: string;
  endClassPeriod: string;
}

const AfterSchoolCourseCreatePage = () => {
  const [form, setForm] = useState<FormType>({
    courseName: "",
    grade: "ALL",
    gender: "ALL",
    startApplication: "",
    endApplication: "",
    startClassPeriod: "",
    endClassPeriod: "",
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
      <VStack>
        <PageHeader title="방과후 코스 등록" />
      </VStack>
      <VStack alignItems="start" gap="60px" marginTop="30px">
        <FormControl isRequired>
          <FormLabel>코스명칭</FormLabel>
          <Input
            name="courseName"
            placeholder="코스명을 입력하세요"
            width="30vw"
            minWidth="200px"
            onChange={(e) => {
              onChange("courseName", e.target.value);
            }}
          />
        </FormControl>
        <HStack gap="60px">
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
        </HStack>
        <FormControl isRequired>
          <FormLabel>신청기간</FormLabel>
          <HStack>
            <DatePicker
              onDate
              onHour
              onMin
              returnValue={(value) => {
                onChange("startApplication", value);
              }}
            />
            <p> ~ </p>
            <DatePicker
              onDate
              onHour
              onMin
              returnValue={(value) => {
                onChange("endApplication", value);
              }}
            />
          </HStack>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>수업기간</FormLabel>
          <HStack>
            <DatePicker
              onDate
              returnValue={(value) => {
                onChange("startClassPeriod", value);
              }}
            />
            <p> ~ </p>
            <DatePicker
              onDate
              returnValue={(value) => {
                onChange("endClassPeriod", value);
              }}
            />
          </HStack>
        </FormControl>
      </VStack>
      {/* <HStack justifyContent="end" marginTop="50px">
        <Button colorScheme="black" variant="outline">
          취소하기
        </Button>
        <Button backgroundColor="black" color="white">
          저장하기
        </Button>
      </HStack> */}
    </>
  );
};

export default AfterSchoolCourseCreatePage;
