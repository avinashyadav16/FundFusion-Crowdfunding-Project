import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FundPage from "../pages/FundPage";
import Campaign from "../pages/Campaign";
import Whatwedo from "../pages/Whatwedo";
import Top10 from "../pages/Top10";

function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/FundPage" element={<FundPage />}></Route>
      <Route path="/campaign" element={<Campaign />}></Route>
      <Route path="/whatwedo" element={<Whatwedo />}></Route>
      <Route path="/top-10" element={<Top10 />}></Route>
    </Routes>
  );
}

export default AllRoute;
