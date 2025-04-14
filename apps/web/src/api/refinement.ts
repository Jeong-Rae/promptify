import { fetcher } from "./axios";

import type { RefineRequest, RefineResponse } from "@promptify/types";

export async function postRefinement(request: RefineRequest): Promise<RefineResponse> {
    const response = await fetcher.post("/refinement", request);
    return response.data;
}
