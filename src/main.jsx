import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import FileContext from "./Components/FileContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FileContext>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </FileContext>
  </StrictMode>
);
