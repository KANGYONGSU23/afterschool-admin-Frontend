
import styled from "@emotion/styled";
import { CheckBox } from "../../../assets";

const AfterSchoolApplicationList = () => {
    const RegistrationList = [
    {
        category: "7, 8교시",
        subject: "배구반",
        teacher: "김현태 선생님",
        personnel: "(0/20)",
        explain: "- 방과후학교 프로그램",
    },
    {
        category: "7, 8교시",
        subject: "배구반",
        teacher: "김현태 선생님",
        personnel: "(0/20)",
        explain: "- 방과후학교 프로그램",
    },
    {
        category: "7, 8교시",
        subject: "배구반",
        teacher: "김현태 선생님",
        personnel: "(0/20)",
        explain: "- 방과후학교 프로그램",
    },
    {
        category: "7, 8교시",
        subject: "배구반",
        teacher: "김현태 선생님",
        personnel: "(0/20)",
        explain: "- 방과후학교 프로그램",
    },
    {
        category: "7, 8교시",
        subject: "배구반",
        teacher: "김현태 선생님",
        personnel: "(0/20)",
        explain: "- 방과후학교 프로그램",
    },
    ];

return(
    <>
        <ListSection>
        {RegistrationList.map(
            ({ category, subject, teacher, personnel, explain}) => (
                <List>
                <div>
                    <p>{category}</p>
                </div>
                <div>
                    <img src={CheckBox} />
                    <Blod>{subject}</Blod>
                    <Blue>{teacher}</Blue>
                    <Blod>{personnel}</Blod>
                    <Middle>{explain}</Middle>
                </div>
                </List>
            )
        )}
        </ListSection>
    </>
    );
};

const ListSection = styled.div`
  margin-bottom: 150px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 3fr;
  padding: 0 200px;
  align-items: center;
  height: 97px;
  border-bottom: 1px solid #D2D2D2;
  p {
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
  }
  div {
    display: flex;
  }
  img {
    margin-right: 11px;
  }
`;

const Blod = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const Blue = styled.div`
  color: #002DCC;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-left: 13px;
  margin-right: 8px;
`;

const Middle = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-left: 60px;
`;

export default AfterSchoolApplicationList;