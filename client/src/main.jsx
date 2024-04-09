import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import AuthContextprovider from "./components/context";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

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
