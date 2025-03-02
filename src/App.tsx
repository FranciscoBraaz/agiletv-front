// Styles
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages
import TvShowDetails from "./pages/TvShowDetails";

// Styles
import "./styles/index.scss";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TvShowDetails />
    </QueryClientProvider>
  );
}

export default App;
