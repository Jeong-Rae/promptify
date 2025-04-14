import axios from "axios";

export const fetcher = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000",
    timeout: 10_000,
});
