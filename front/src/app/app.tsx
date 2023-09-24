import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../styles';
import { AuthProvider } from '../core';
import { getCurrentAccount } from './adapters';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes/router';

const App: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider getCurrentAccount={getCurrentAccount}>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
