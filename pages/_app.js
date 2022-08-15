import { CacheProvider } from "@emotion/react";
import { Container } from "@mui/system";
import createEmotionCache from "../src/createEmotionCache";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#fcba03",
    },
  },
 });

export default MyApp;
