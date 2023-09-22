import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../styles';
import Router from './routes/router';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
