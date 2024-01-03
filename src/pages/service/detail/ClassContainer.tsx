import { VStack, HStack, } from "@chakra-ui/layout";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';

const ClassContainer = () => {
  const { register } = useForm();
  return (
      <div>
        <VStack width={"90%"} >
          <FormControl isRequired>
            <FormLabel>강좌명</FormLabel>
            <Input  
              {...register("Course id", { required: "This is Required" })}
              background="#F5F5F5"
              placeholder="강좌명을 입력해 주세요."
              _placeholder={{
                fontSize: "12px",
              }}
              border="none"
            />
          </FormControl>
        </VStack>

        <HStack display={"flex"} gap={"20px"} paddingTop={"40px"}>
          <VStack width={"15%"}>
            <FormControl isRequired>
              <FormLabel>시수</FormLabel>
              <Input  
                {...register("count", { required: "This is Required" })}
                border="none"
                background="#F5F5F5"
              />
              <FormHelperText fontSize={"11px"}>수업 진행 횟수</FormHelperText>
            </FormControl>
          </VStack>

          <HStack width={"71%"}>
            <FormControl>
              <FormLabel>정원선택</FormLabel>
              <Input  
                {...register("count", { required: "This is Required" })}
                border="none"
                background="#F5F5F5"
              />
              <FormHelperText fontSize={"11px"}>
                정원을 작성하지 않을 시에 해당 방과후는 정원 없음으로 표시됩니다.
              </FormHelperText>
            </FormControl>
          </HStack>
        </HStack>
    </div>
  );
};

export default ClassContainer;
