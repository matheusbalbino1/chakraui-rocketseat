import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../context/SideBarDrawerContext"
import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header() {

    const { onOpen } = useSidebarDrawer()

    const showToLargeWide = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as={"header"}
            width={"100%"}
            maxWidth={1480}
            height={20}
            marginX={"auto"}
            marginTop={4}
            paddingX={6}
            align={"center"}>
            {!showToLargeWide && (
                <IconButton icon={<Icon as={RiMenuLine}/>}
                fontSize="24"
                variant="un"
                onClick={onOpen}
                aria-label="Open Navigation"
                mr="2"
                >

                </IconButton>
            )}
            <Logo />
            {showToLargeWide && <SearchBox />}


            <Flex
                align={"center"}
                ml={"auto"}>

                <NotificationNav />
                <Profile showProfileData={showToLargeWide} />

            </Flex>

        </Flex>
    )
}