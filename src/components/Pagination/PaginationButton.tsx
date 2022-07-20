import { Button } from "@chakra-ui/react";

interface PaginationButtonProps {
    numberPage: number;
    isCurrent?: boolean;
}

export function PaginationButton({ isCurrent = false, numberPage }: PaginationButtonProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize={"x5"}
                width="4"
                colorScheme={"pink"}
                disabled
                _disabled={{
                    bgColor: "pink.500",
                    cursor: "default"
                }}>
                {numberPage}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize={"x5"}
            width="4"
            bgColor={"gray.700"}
            _hover={{
                bg: "gray.500"
            }}>
            {numberPage}
        </Button>
    )
}