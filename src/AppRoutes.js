import App from "./App";
import Navbar from "./componentes/Navbar/Navbar";
import NewVideo from "./pages/NewVideo/NewVideo"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Banner from "./componentes/Banner/Banner"

function AppRoutes() {

    return (
        <BrowserRouter>

            <Navbar />
            <Routes>
                <Route path="/new-video" element={<NewVideo />} ></Route>
                <Route path="/banener" element={<Banner />} ></Route>
                <Route path="/" element={<App />} ></Route>
            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes;