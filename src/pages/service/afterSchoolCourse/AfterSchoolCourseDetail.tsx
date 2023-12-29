import { Text } from "@chakra-ui/layout";
import { useParams } from "react-router";

const AfterSchoolCourseDetail = () => {
  const { id } = useParams();

  return <Text>방과후 코스 상세 페이지</Text>;
};

export default AfterSchoolCourseDetail;
