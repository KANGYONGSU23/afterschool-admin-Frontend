import { Divider, Flex, Heading } from "@chakra-ui/layout";
import { PropsWithChildren } from "react";

const PageHeader = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <Flex width={"100%"} direction={"column"} gap={4} marginBottom={6}>
      <Flex justify={"space-between"}>
        <Heading fontSize={"xx-large"} fontWeight={600}>
          {title}
        </Heading>
        {children}
      </Flex>
      <Divider borderColor={"gray.400"} />
    </Flex>
  );
};

export default PageHeader;
