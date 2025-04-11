import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RootPage } from "./pages/Root";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
