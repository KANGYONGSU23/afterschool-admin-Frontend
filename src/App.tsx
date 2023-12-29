import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainRouter from "./router/MainRouter";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <MainRouter />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
