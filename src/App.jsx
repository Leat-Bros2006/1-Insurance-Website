
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './page/Home'
import About from "./page/About"
import Contact from './page/Contact'
import Plans from "./page/Plans"
import Servicse from "./page/Servicse"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/servicse" element={<Servicse />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App