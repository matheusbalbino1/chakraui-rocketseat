import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">

                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} children="Dashboard"></NavLink>
                    <NavLink icon={RiContactsLine} children="Usuarios"></NavLink>
                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiInputMethodLine} children="Formulários"></NavLink>
                    <NavLink icon={RiGitMergeLine} children="Automação"></NavLink>
                </NavSection>
            </Stack>

        </Box>
    )
}