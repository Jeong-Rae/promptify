import { Flex } from "@radix-ui/themes";
import { RuleInputForm } from "@components/prompt/RuleInputForm";

export default function PromptManager(): React.ReactNode {
    return (
        <Flex
            direction="column"
            style={{
                height: "100%",
                overflow: "auto",
                backgroundColor: "white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
            p="6"
        >
            <RuleInputForm />
        </Flex>
    );
}
