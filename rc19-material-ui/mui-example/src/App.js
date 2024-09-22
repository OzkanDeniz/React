import Container from "@mui/material/Container";
import Products from "./pages/Products";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Products/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
