import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Check from "../routes/Check";
import CreateQuestion from "../routes/CreateQuestion";
import Home from "../routes/Home";
import ModifyQuestion from "../routes/ModifyQuestion";
import SelfCheck from "../routes/SelfCheck";
import SelfCheckResult from "../routes/SelfCheckResult";

function Router() {
    return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <NavBar/>
                <Routes >
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/check"} element={<Check/>}></Route>
                    <Route path={"/create"} element={<CreateQuestion/>}>
                    </Route>
                    <Route path={"/self-check"} element={<SelfCheck/>}></Route>
                    <Route path={"/modify"} element={<ModifyQuestion/>}></Route>
                    <Route path={"/result"} element={<SelfCheckResult/>}></Route>
                </Routes>
            </BrowserRouter>
    )
}

export default Router