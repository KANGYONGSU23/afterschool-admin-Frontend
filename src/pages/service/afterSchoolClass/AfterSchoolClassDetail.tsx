import { VStack } from "@chakra-ui/layout";
import PageHeader from "../../../components/services/common/PageHeader";
import { useParams } from "react-router";

const AfterSchoolClassDetail = () => {
  const { id } = useParams();

  return (
    <VStack>
      <PageHeader title="방과후 수업 상세 페이지" />
    </VStack>
  );
};

export default AfterSchoolClassDetail;
