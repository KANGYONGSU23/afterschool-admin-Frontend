import { HStack, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

interface PropsType {
  onDate?: boolean;
  onHour?: boolean;
  onMin?: boolean;
  returnValue: (value: string) => void;
}
interface Datetype {
  date: string;
  hour: string;
  min: string;
}

const DatePicker = ({
  onDate = false,
  onHour = false,
  onMin = false,
  returnValue,
}: PropsType) => {
  const [date, setDate] = useState<Datetype>({
    date: "",
    hour: "",
    min: "",
  });
  const [inputStyle, setInputStyle] = useState({
    borderColor: "#e2e8f0",
    boxShadow: "none",
  });

  const hour = Array.from({ length: 24 });
  const min = Array.from({ length: 60 });

  const onChange = (name: keyof Datetype, value: string) => {
    setDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    returnValue(
      `${onDate && date.date}${onHour ? date.hour && "." + date.hour : ""}${
        onMin ? date.min && ":" + date.min : ""
      }`
    );
  }, [date]);

  return (
    <HStack>
      {onDate && (
        <DateInput
          type="date"
          onFocus={() => {
            setInputStyle({
              borderColor: "#3182ce",
              boxShadow: "0 0 0 1px #3182ce",
            });
          }}
          onBlur={() => {
            setInputStyle({
              borderColor: "#e2e8f0",
              boxShadow: "none",
            });
          }}
          style={inputStyle}
          onChange={(e) => {
            onChange("date", e.target.value);
          }}
        />
      )}
      {onHour && (
        <Select
          placeholder="시"
          width="120px"
          onChange={(e) => {
            onChange("hour", e.target.value);
          }}
        >
          {hour.map((_, idx) => (
            <option value={idx}>{idx}시</option>
          ))}
        </Select>
      )}
      {onMin && (
        <Select
          onChange={(e) => {
            onChange("min", e.target.value);
          }}
          placeholder="분"
          width="120px"
        >
          {min.map((_, idx) => (
            <option value={idx}>{idx}분</option>
          ))}
        </Select>
      )}
    </HStack>
  );
};

const DateInput = styled.input`
  width: 160px;
  height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 4px 12px;
  outline: none;
`;

export default DatePicker;
