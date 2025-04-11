import { Text, TextField } from "@radix-ui/themes";

export default function RuleNameInput(): React.ReactNode {
    return (
        <>
            <Text as="label" htmlFor="rule-name" size="4" weight="medium" mb="2">
                프롬프트 이름
            </Text>
            <TextField.Root
                mb="4"
                placeholder="프롬프트 이름"
                id="rule-name"
                color="teal"
                variant="surface"
            />
        </>
    );
}
