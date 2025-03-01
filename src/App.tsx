// Styles
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TvShowDetails from "./pages/TvShowDetails";
import "./styles/index.scss";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TvShowDetails />
    </QueryClientProvider>
  );
}

export default App;
