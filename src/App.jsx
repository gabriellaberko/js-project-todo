import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.styled';
import { GlobalStyle } from './styles/GlobalStyles';
import { TaskOverviewPage } from './pages/TaskOverviewPage';


export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <TaskOverviewPage />
      </ThemeProvider>
    </>
  )
}
