import { VStack } from "@chakra-ui/layout";
import PageHeader from "../../../components/services/common/PageHeader";
import { useParams } from "react-router";

const AfterSchoolCourseDetail = () => {
  const { id } = useParams();

  return (
    <VStack>
      <PageHeader title="방과후 코스 상세 페이지" />
    </VStack>
  );
};

export default AfterSchoolCourseDetail;
