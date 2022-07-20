import { Flex, HStack, Icon, Text, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function Profile() {
    return (
        
            
            <Flex align={"center"}>
                <Box>
                    <Text>Matheus Balbino</Text>
                    <Text color={"gray.300"} fontSize={"small"}>matheusbalbinodeoliveira3@gmail.com</Text>
                </Box>
                <Avatar size="md" name="Matheus Balbino de Oliveira" src="https://github.com/matheusbalbino1.png" />
            </Flex>
        
    )
}