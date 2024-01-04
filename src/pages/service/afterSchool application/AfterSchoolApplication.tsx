import styled from "@emotion/styled";
import { ListImg } from "../../../assets";
import Header from "../../../components/header";
import AfterSchoolApplicationList from "./AfterSchoolApplicationList";
import { Checkbox, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AfterSchoolCourseRegistration = () => {
  const [selectedOption, setSelectedOption] = useState(''); // 선택된 옵션을 관리할 상태

  const navigate = useNavigate();

  const handleRadioChange = () => {
    setSelectedOption('radio');
  };

  const handleCheckboxChange = () => {
    setSelectedOption('checkbox');
  };

  
  const onClickSave = () => {
    
    navigate("/main");
    alert("신청되었습니다.");
  };
    

  return(
    <>
    <Header />
      <Container>
        <TitleSection>
          <img src={ListImg} alt="listImg" />
          <Title>방과후 수강 신청하기</Title>
        </TitleSection>
        <TimerSection>
          <Subject>진로체험활동</Subject>
          <Time>11-20 09:00 ~ 12-03 23:59</Time>
        </TimerSection>
        <SelectSection>
          <Box>
            <Sub>선택과목수</Sub>
            <Option>
              <div>
                <Radio checked={selectedOption === 'radio'} onChange={handleRadioChange} />
                <p>지정 안함</p>
              </div>
              <div>
                <Radio checked={selectedOption === 'radio'} onChange={handleRadioChange} />
                <p>지정함</p>
              </div>
            </Option>
            <Sub>선택 옵션</Sub>
            <Option>
              <div>
                <Checkbox />
                <p>같은 강좌 선택 못함</p>
              </div>
              <div>
                <Checkbox />
                <p>각 셀별 1개 강좌선택</p>
              </div>
            </Option>
          </Box>
        </SelectSection>
        <ButtonSection>
          <Button   onClick={onClickSave}>신청하기</Button>
        </ButtonSection>
        <div>
          <ListTitle>
            <p>구분</p>
            <p>월요일</p>
          </ListTitle>
          <AfterSchoolApplicationList />
          <ListTitle>
            <p>구분</p>
            <p>수요일</p>
          </ListTitle>
          <AfterSchoolApplicationList />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 0 7%;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #0D0D0D;
  height: 60px;
  padding: 0 0 0 40px;
  margin-bottom: 25px;
`;

const Title = styled.div`
  color: White;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  margin-left: 10px;
`;

const TimerSection = styled.div`
  padding: 70px 0 20px;
  div {
    display: flex;
    justify-content: center;
  }
`;

const SelectSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 46px;
`;

const Box = styled.div`
  width: 394px;
  height: 217px;
  border-radius: 8px;
  border: 1px solid #000;
  padding: 30px 30px;
  div {
    display: flex;
    gap: 15px;
  }
  p {
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Option = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const Sub = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Subject = styled.div` 
  display: flex;
  justify-content: center;
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 6px;
`;

const Time = styled.div`
  display: flex;
  justify-content: center;
  color: #777;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: #0D0D0D;
  padding: 11px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ListTitle = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 3fr;
  align-items: center;
  height: 56px;
  background: #0D0D0D;
  padding: 0 200px;
  p {
    color: #FFF;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
  }
`;

export default AfterSchoolCourseRegistration;