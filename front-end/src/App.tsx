import { ThemeProvider } from 'styled-components';
import GlobalStyle from './utils/globalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme, whiteTheme } from './utils/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Router from './utils/Routes';
import { useRecoilValue } from 'recoil';
import { lightMode } from './utils/storage';

const queryClient = new QueryClient();

function App() {
  const isLightMode = useRecoilValue(lightMode)
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isLightMode ? whiteTheme : darkTheme}>
        <GlobalStyle/>
        <Router/>
        <ReactQueryDevtools initialIsOpen panelProps={{style:{height:250}}}/>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
