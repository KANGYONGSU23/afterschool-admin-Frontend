import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";

interface PropsType {
  label: string;
  description: string;
  radioItems: radioItemType[];
  returnValue: (value: string) => void;
}

interface radioItemType {
  value: string;
  label: string;
}

const RadioContainer = ({
  label,
  description,
  radioItems,
  returnValue,
}: PropsType) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        onChange={(value) => {
          returnValue(value);
        }}
      >
        <HStack display="block">
          {radioItems.map(({ value, label }) => (
            <Radio value={value} marginRight="20px">
              {label}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
      <FormHelperText fontSize="xs">{description}</FormHelperText>
    </FormControl>
  );
};

export default RadioContainer;
