import { Button, Text } from "@radix-ui/themes";

export default function PromptAddButton(): React.ReactNode {
    return (
        <Button type="button" color="teal" variant="soft">
            <Text>+ 프롬프트 추가</Text>
        </Button>
    );
}
