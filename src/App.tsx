import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

// Pages
import TvShowDetails from "./pages/TvShowDetails";

// Styles
import "./styles/index.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer draggable={false} theme="dark" />
      <TvShowDetails />
    </QueryClientProvider>
  );
}

export default App;
