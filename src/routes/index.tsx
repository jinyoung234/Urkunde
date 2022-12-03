import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "src/components/commons/NavBar";
import Check from "src/pages/Check";
import CreateQuestion from "src/pages/CreateQuestion";
import Home from "src/pages/Home";
import ModifyQuestion from "src/pages/ModifyQuestion";
import SelfCheck from "src/pages/SelfCheck";
import SelfCheckResult from "src/pages/SelfCheckResult";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/check"} element={<Check />}></Route>
        <Route path={"/create"} element={<CreateQuestion />}></Route>
        <Route path={"/self-check"} element={<SelfCheck />}></Route>
        <Route path={"/modify"} element={<ModifyQuestion />}></Route>
        <Route path={"/result"} element={<SelfCheckResult />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
