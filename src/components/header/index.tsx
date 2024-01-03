import styled from "@emotion/styled";
import { Logo } from "../../assets";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <img
        src={Logo}
        alt="logo"
        onClick={()=>{navigate("/main")}}
      />
      <Div><Text onClick={()=>{navigate("/after-school-course/index")}}>코스관리</Text>
      <Text onClick={()=>{navigate("/after-school-class/index")}}>강좌관리</Text>
      <Name>권하은 님</Name></Div>
      
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  height: 50px;
  width: 100%;
  display: flex;
  padding: 10px 7%;
  align-items: center;
  img {
    cursor: pointer;
    height: 40px;
  }
  margin-bottom: 40px;
`;

const Text = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-right: 88px;
  font-family: Pretendard;

`;

const Name = styled.div`
  color: #666;
  font-size: 18px;
  font-weight: 500;
  font-family: Pretendard;
`;

const Div=styled.div`
margin-left: auto;
display: flex;

`

export default Header;
