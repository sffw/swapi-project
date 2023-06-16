import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme } from "@mui/material/styles";
import styles from "./styles/main.module.css";
import { TableArea } from "./components/table/TableArea";
import { ThemeProvider } from "@emotion/react";
import { Navbar } from "./components/navbar/Navbar";
import { Uploader } from "./components/Uploader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e557c",
    },
    secondary: {
      main: "#334e30",
    },
    text: {
      primary: "#000000",
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div id={styles["app-container"]}>
          <Navbar />
          <div id={styles["table-area"]}>
            <TableArea />
          </div>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
