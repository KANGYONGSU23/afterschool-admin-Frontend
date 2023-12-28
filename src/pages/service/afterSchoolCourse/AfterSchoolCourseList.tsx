import { Text, VStack } from "@chakra-ui/layout";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const AfterSchoolCourseListPage = () => {
  //TODO: 제거
  const dummyData = [
    {
      id: "1",
      version: "1.0.1",
      name: "이름1",
      seller: "Wade",
      customer: "Amber",
      date: "2023.11.22",
    },
    {
      id: "2",
      version: "1.0.1",
      name: "이름2",
      seller: "Wade",
      customer: "Amber",
      date: "2023.12.02",
    },
    {
      id: "3",
      version: "1.0.1",
      name: "이름3",
      seller: "Wade",
      customer: "Amber",
      date: "2023.04.02",
    },
  ];

  return (
    <VStack>
      <Text>방과후 코스 리스트 페이지</Text>

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>API 이름</Th>
              <Th>버전</Th>
              <Th>구매자</Th>
              <Th>판매자</Th>
              <Th>구매일</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dummyData.map(({ id, name, version, seller, customer, date }) => (
              <Tr key={id} cursor={"pointer"}>
                <Td>{name}</Td>
                <Td>{version}</Td>
                <Td>{seller}</Td>
                <Td>{customer}</Td>
                <Td>{date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default AfterSchoolCourseListPage;
