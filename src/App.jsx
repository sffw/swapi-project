import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme } from "@mui/material/styles";
import styles from "./styles/main.module.css";
import { TopNavbar } from "./components/Navbars/TopNavbar";
import { LeftNavbar } from "./components/Navbars/LeftNavbar";
import { TableArea } from "./components/Table/TableArea";
import { Uploader } from "./components/Uploader";
import { ThemeProvider } from "@emotion/react";
import DataGridDemo from "./components/DataGridDemo";

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
          <LeftNavbar />
          <div id={styles["main-content-area"]}>
            <TopNavbar />
            <div id={styles["table-area"]}>
              <TableArea />
            </div>
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
