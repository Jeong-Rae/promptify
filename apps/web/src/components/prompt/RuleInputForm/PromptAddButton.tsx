import type { ReactNode } from "react";
import { Button, Text } from "@radix-ui/themes";

export default function PromptAddButton(): ReactNode {
    return (
        <Button type="button" size="3" color="teal" variant="soft">
            <Text>+ 프롬프트 추가</Text>
        </Button>
    );
}
