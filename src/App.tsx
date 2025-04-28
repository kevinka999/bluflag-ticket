import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Overview } from "./pages";
import { ToastProvider } from "./context/ToastContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ToastProvider>
  );
}
