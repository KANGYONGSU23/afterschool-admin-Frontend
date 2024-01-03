import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import Header from "../../../components/header";
import { ListImg } from "../../../assets";

const Main = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <Header/>
      <Container>
        <Table>
          <img src={ListImg} alt="listImg" />
          <Text>방과후 코스 리스트</Text>
        </Table>
        <List onClick={() => {navigate("/afterSchoolCourseRegistration")}} >
          <ListText>7,8교시</ListText>
          <ListText>진로체험활동</ListText>
          <ListText>11-20 09:00 ~ 12-03 23:59</ListText>
          <State>신청중</State>
        </List>
      </Container>
    </>
  );
};

const State = styled.div`
  color: #0029b8;
  font-size: 16px;
  font-weight: 400;
  font-family: Pretendard;
`;
const ListText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

const Container = styled.div`
  background-color: white;
  padding: 0 7%;
`;
const Table = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  padding: 0 40px;
  gap: 10px;
  border-radius: 8px;
  background: #0d0d0d;
  font-family: Pretendard;
`;

const Text = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  font-family: Pretendard;
`;

const List = styled.div`
  height: 55px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
  margin-top: 25px;
  padding: 0 40px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export default Main;