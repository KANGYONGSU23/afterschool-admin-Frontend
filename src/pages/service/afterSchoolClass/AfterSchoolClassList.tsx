import { VStack } from "@chakra-ui/layout";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import PageHeader from "../../../components/services/common/PageHeader";

const AfterSchoolClassListPage = () => {
  //TODO: 제거
  const dummyData = [
    {
      id: "1",
      order: 1,
      name: "진로체험활동",
      teacher: "장성혜",
      division: "7, 8교시 / 수",
      place: "1-1교실",
      count: 1,
      currentHeadCount: 8,
      fullHeadCount: 18,
      target: "1~3학년",
    },
    {
      id: "1",
      order: 1,
      name: "진로체험활동",
      teacher: "장성혜",
      division: "7, 8교시 / 수",
      place: "1-1교실",
      count: 1,
      currentHeadCount: 8,
      fullHeadCount: 18,
      target: "1~3학년",
    },
    {
      id: "1",
      order: 1,
      name: "진로체험활동",
      teacher: "장성혜",
      division: "7, 8교시 / 수",
      place: "1-1교실",
      count: 1,
      currentHeadCount: 8,
      fullHeadCount: 18,
      target: "1~3학년",
    },
  ];

  return (
    <VStack>
      <PageHeader title="방과후 수업 리스트">
        <Button>수업 생성하기</Button>
      </PageHeader>

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>순번</Th>
              <Th>강좌명</Th>
              <Th>선생님</Th>
              <Th>구분</Th>
              <Th>장소</Th>
              <Th>시수</Th>
              <Th>신청인원</Th>
              <Th>대상</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dummyData.map(
              ({
                id,
                name,
                order,
                count,
                currentHeadCount,
                fullHeadCount,
                place,
                teacher,
                division,
                target,
              }) => (
                <Tr key={id} cursor={"pointer"}>
                  <Td>{order}</Td>
                  <Td>{name}</Td>
                  <Td>{teacher}</Td>
                  <Td>{division}</Td>
                  <Td>{place}</Td>
                  <Td>{count}</Td>
                  <Td>
                    {currentHeadCount} / {fullHeadCount}
                  </Td>
                  <Td>{target}</Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default AfterSchoolClassListPage;
