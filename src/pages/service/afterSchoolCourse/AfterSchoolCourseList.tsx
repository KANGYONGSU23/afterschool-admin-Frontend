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

const AfterSchoolCourseListPage = () => {
  //TODO: 제거
  const dummyData = [
    {
      id: "1",
      order: 1,
      category: "진로체험활동",
      status: "신청종료",
      target: "1~3학년",
      openAt: "11-20 09:00",
      closeAt: "11-20 09:00",
      classCount: 18,
    },
    {
      id: "1",
      order: 1,
      category: "진로체험활동",
      status: "신청종료",
      target: "1~3학년",
      openAt: "11-20 09:00",
      closeAt: "11-20 09:00",
      classCount: 18,
    },
    {
      id: "1",
      order: 1,
      category: "진로체험활동",
      status: "신청종료",
      target: "1~3학년",
      openAt: "11-20 09:00",
      closeAt: "11-20 09:00",
      classCount: 18,
    },
  ];

  return (
    <VStack>
      <PageHeader title="방과후 코스 리스트">
        <Button>코스 생성하기</Button>
      </PageHeader>

      <TableContainer width={"100%"}>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>순번</Th>
              <Th>코스</Th>
              <Th>상태</Th>
              <Th>신청대상</Th>
              <Th>신청기간</Th>
              <Th>강좌수</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dummyData.map(
              ({
                id,
                category,
                order,
                classCount,
                openAt,
                closeAt,
                status,
                target,
              }) => (
                <Tr key={id} cursor={"pointer"}>
                  <Td>{order}</Td>
                  <Td>{category}</Td>
                  <Td>{status}</Td>
                  <Td>{target}</Td>
                  <Td>
                    {openAt} ~ {closeAt}
                  </Td>
                  <Td>{classCount}</Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default AfterSchoolCourseListPage;
