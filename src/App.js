import { Routes, Route } from "react-router-dom"
import Home from "./page/home";
import InfoGame from "./page/info";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:id" element={<InfoGame />} />
        </Routes>
    )
}

export default App;