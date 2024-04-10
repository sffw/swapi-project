import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./styles/App.module.css";
import { TableArea } from "./components/Table/TableArea";
import { Navbar } from "./components/navbar/Navbar";

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
        <Navbar />
        <div id={styles["table-area"]}>
          <TableArea />
        </div>
      </div>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
