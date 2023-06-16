import { createRoot } from "react-dom/client";
import { Uploader } from "./components/Uploader";
import { DataTable } from "./components/Table/DataTable";
import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./styles/main.module.css";
import { TopNavbar } from "./components/Navbars/TopNavbar";
import { LeftNavbar } from "./components/Navbars/LeftNavbar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div id={styles["app-container"]}>
        <LeftNavbar />
        <div id={styles["main-content-area"]}>
          <TopNavbar />
          <div id={styles["table-area"]}>
            <DataTable />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
