import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Check from "../routes/Check";
import Home from "../routes/Home";
function Router() {
    return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <NavBar/>
                <Routes >
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/check"} element={<Check/>}></Route>
                </Routes>
            </BrowserRouter>
    )
}

export default Router