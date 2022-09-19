import { Routes, Route } from "react-router-dom";
import Drinks from "../pages/Drinks";
import Show from "../pages/Show";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path = "/" element = {<Drinks />} />
                <Route path = "/drinks/:id" element= {<Show />} /> 
            </Routes>
        </main>
    )
}

export default Main