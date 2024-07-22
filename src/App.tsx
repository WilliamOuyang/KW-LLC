import "../globals.css"     
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import Pay from "./pages/Pay";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route index element={<Pay />} />
        <Route path="/" element={<Pay />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
  </ThemeProvider>
  )
}

export default App
