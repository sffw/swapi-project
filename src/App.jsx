import { createRoot } from "react-dom/client";
import { Uploader } from "./components/Uploader";

const App = () => {
  return (
    <div>
      <h1>Welcome to Swapi</h1>
      <Uploader />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
