import { Flex, Text, TextField } from "@radix-ui/themes";

export default function RuleNameInput(): React.ReactNode {
    return (
        <Flex direction="column" gap="2" m="0">
            <Text as="label" htmlFor="rule-name" size="4" weight="medium">
                프롬프트 이름
            </Text>
            <TextField.Root
                placeholder="프롬프트 이름"
                id="rule-name"
                color="teal"
                variant="surface"
            />
        </Flex>
    );
}
