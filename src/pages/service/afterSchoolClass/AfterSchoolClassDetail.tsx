import { Text } from "@chakra-ui/layout";
import { useParams } from "react-router";

const AfterSchoolClassDetail = () => {
  const { id } = useParams();

  return <Text>방과후 수업 상세 페이지</Text>;
};

export default AfterSchoolClassDetail;
