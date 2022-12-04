import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "src/components/commons/NavBar";
import Check from "src/pages/Check";
import Create from "src/pages/Create";
import Home from "src/pages/Home";
import SelfCheck from "src/pages/SelfCheck";
import SelfCheckResult from "src/pages/SelfCheckResult";
import Delete from "src/pages/Delete";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/check"} element={<Check />}></Route>
        <Route path={"/create"} element={<Create />}></Route>
        <Route path={"/self-check"} element={<SelfCheck />}></Route>
        <Route path={"/delete"} element={<Delete />}></Route>
        <Route path={"/result"} element={<SelfCheckResult />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
