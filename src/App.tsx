import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lightTheme, colorTheme } from "./styles/theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./routes";
import { useRecoilValue } from "recoil";
import { colorMode } from "./atoms";

const queryClient = new QueryClient();

function App() {
  const isColorMode = useRecoilValue(colorMode);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isColorMode ? colorTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools
          initialIsOpen
          panelProps={{ style: { height: 250 } }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
