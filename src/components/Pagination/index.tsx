import { Stack, Box, Button } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";

export function Pagination() {
    return (
        <Stack direction={["column","row"]} mt="8" justify={"space-between"} align="center" spacing={6}>
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction={"row"} spacing="2">
                <PaginationButton numberPage={1} />
                <PaginationButton numberPage={2} isCurrent/>
                <PaginationButton numberPage={3} />
                <PaginationButton numberPage={4} />
                <PaginationButton numberPage={5} />
                
            </Stack>
        </Stack>
    )
}