import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../components/Header/index";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
                <Sidebar />
                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8">
                    <Flex mb="8" justify={"space-between"} align="center">
                        <Heading size="lg" fontWeight={"normal"}>Usuarios</Heading>
                        <Button
                            as="a"
                            size="sm"
                            fontSize={"sm"}
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                            Criar novo
                        </Button>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" w="8">
                                    <Checkbox colorScheme={"pink"} />
                                </Th>
                                <Th>Usuarios</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme={"pink"} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Matheus Balbino</Text>
                                        <Text fontSize="sm" color="gray.300">matheusbalbinodeoliveira3@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>20 de Julho, 2022</Td>
                                <Td><Button
                                    as="a"
                                    size="sm"
                                    fontSize={"sm"}
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}>
                                    Editar
                                </Button></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}