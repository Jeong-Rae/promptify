import { useMutation } from "@tanstack/react-query";

import { postRefinement } from "@api/refinement";

import type { RefineRequest, RefineResponse } from "@api/refinement";

export function useRefineText() {
    return useMutation<RefineResponse, Error, RefineRequest>({
        mutationFn: postRefinement,
    });
}
