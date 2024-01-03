import styled from "@emotion/styled";
import { ListImg } from "../../../assets";
import Header from "../../../components/header";

const AfterSchoolApplication = () => {
  return (
    <>
    <Header/>
      <Container>
        <Table>
          <img src={ListImg} alt="listImg" />
          <Text>방과후 수강 신청하기</Text>
        </Table>
      </Container>
    </>
  );
};

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
`;

const Text = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

export default AfterSchoolApplication;
