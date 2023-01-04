import { Button } from "@chakra-ui/react"

import { GoChevronRight } from "react-icons/go"

export const GetStartedButton = ({children}) => {
    return (
        <Button rightIcon={<GoChevronRight/>} size={{base: "md", lg: "lg"}} padding={{base: 4, lg: 9}} fontSize={{base: 16, lg: 28}} margin="0 !important">
            {children}
        </Button>
    )
}