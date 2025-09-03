import AppRouter from "./AppRouter";
import { Container, Paper } from "@mui/material";
import appTheme from "./styles/theme";
import AppNavbar from "./components/common/AppNavbar";
import { useThemeMode } from "./context/ThemeContext";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";

function App() {
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? appTheme.dark : appTheme.light;

  return (
    <Paper
      sx={{
        minHeight: "100vh",
        background: `${theme.colors.gradientBackground} !important`,
      }}
    >
      <AppNavbar />
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          color: theme.colors.textLight,
          fontFamily: theme.fontFamily,
          px: { xs: 0, sm: 2, md: 3 },
          boxSizing: "border-box",
        }}
      >
        
          <AppRouter />
          <ScrollToTop />
      </Container>
      <Footer />
    </Paper>
  )
}

export default App
