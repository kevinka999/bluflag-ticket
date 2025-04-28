import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Overview } from "./pages";
import { ToastProvider } from "./context/ToastContext";

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
