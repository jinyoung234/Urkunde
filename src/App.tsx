import { ThemeProvider } from 'styled-components';
import GlobalStyle from './utils/globalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lightTheme, colorTheme } from './utils/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Router from './utils/Routes';
import { useRecoilValue } from 'recoil';
import { colorMode } from './utils/storage';

const queryClient = new QueryClient();

function App() {
  const isColorMode = useRecoilValue(colorMode)
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isColorMode ? colorTheme : lightTheme}>
        <GlobalStyle/>
        <Router/>
        <ReactQueryDevtools initialIsOpen panelProps={{style:{height:250}}}/>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
