import { Routes, Route } from "react-router-dom";
import Campaign from "../pages/Campaign";
import Home from "../pages/Home";
import Top10 from "../pages/Top10";
import Whatwedo from "../pages/Whatwedo";
function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/whatwedo" element={<Whatwedo />}></Route>
      <Route path="/campaign" element={<Campaign />}></Route>
      <Route path="/top-10" element={<Top10 />}></Route>
      {/* <Route path="/campaign" element={<Campaign />}></Route> */}
    </Routes>
  );
}
export default AllRoute;
