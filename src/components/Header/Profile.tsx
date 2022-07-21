import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (

        <Flex align={"center"}>
            {!!showProfileData && (
                <Box>
                    <Text>Matheus Balbino</Text>
                    <Text color={"gray.300"} fontSize={"small"}>matheusbalbinodeoliveira3@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Matheus Balbino de Oliveira" src="https://github.com/matheusbalbino1.png" />
        </Flex>

    )
}