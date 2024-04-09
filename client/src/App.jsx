import { Notifications } from "@mantine/notifications";
import MontserratFont from "./fonts/MontserratFont";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <MontserratFont />
      <Notifications />
    </>
  );
}

export default App;
