import { Theme } from "@promptify/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Theme>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Theme>
    </StrictMode>
);
