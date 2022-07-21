import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
    return (
        <Stack spacing="12" align="flex-start">

            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} children="Dashboard" href="/dashboard"></NavLink>
                <NavLink icon={RiContactsLine} children="Usuarios" href="/users"></NavLink>
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} children="Formulários" href="/forms"></NavLink>
                <NavLink icon={RiGitMergeLine} children="Automação" href="/automation"></NavLink>
            </NavSection>
        </Stack>
    )
}