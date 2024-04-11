import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import AuthContextprovider from "./components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <AuthContextprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextprovider>
  </ChakraProvider>
);
