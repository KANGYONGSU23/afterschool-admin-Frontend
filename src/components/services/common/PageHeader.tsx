import { Container, Divider, Heading } from "@chakra-ui/layout";
import { PropsWithChildren } from "react";

const PageHeader = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Container width={"100%"}>
      <Heading>{children}</Heading>
      <Divider />
    </Container>
  );
};

export default PageHeader;
