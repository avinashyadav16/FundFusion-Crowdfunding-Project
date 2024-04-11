import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Whatwedo from "../pages/Whatwedo";
import Campaign from "../pages/Campaign";
import Top10 from "../pages/Top10";

function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/whatwedo" element={<Whatwedo />}></Route>
      <Route path="/campaign" element={<Campaign />}></Route>
      <Route path="/top-10" element={<Top10 />}></Route>
    </Routes>
  );
}
export default AllRoute;
