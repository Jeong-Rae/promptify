import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootPage from "@pages/Root";

import type { ReactNode } from "react";

function App(): ReactNode {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
