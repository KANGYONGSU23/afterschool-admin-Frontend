import { FormControl, FormHelperText, FormLabel, Input, VStack } from '@chakra-ui/react'
import { SignupInputData } from '../../../constants'
import { InputContainerDataType } from '../../../constants'
import { useForm } from 'react-hook-form'

const InputContainer = () => {
  const { register } = useForm(); 
  return (
    <VStack width={"100%"} display="flex" gap="40px" paddingRight="30px"> 
      {SignupInputData.map((item: InputContainerDataType) => (
        <FormControl key={item.title} isRequired={item.important}>
          <FormLabel>{item.title}</FormLabel>
          <Input 
            {...register(`${item.register}`, { required: "This is Required"})}
            placeholder={item.placeholder}
            _placeholder={{
              fontSize: "12px",
            }}
            background="#f5f5f5"
            border="none"
          />
            {item.detail && (
              <FormHelperText fontSize={"11px"}>
                임의 수강신청을 원할 경우 파일을 첨부해 주세요.
              </FormHelperText>
            )}
        </FormControl>
      ))} 
    </VStack>
  )
}

export default InputContainer