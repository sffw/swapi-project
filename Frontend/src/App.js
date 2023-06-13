// https://swapi.dev/
import { QueryClient, QueryClientProvider } from "react-query";
import Table from "./components/Table"
import { Uploader } from "./components/Uploader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <h1>SWAPI table</h1>
        <Table />
        <Uploader />
      </div>
    </QueryClientProvider>
  )
}
export default App;
