import { Button } from "@chakra-ui/react"

import { AiOutlineGlobal } from "react-icons/ai"
import { GoChevronDown } from "react-icons/go"

export const LanguageButton = ({style}) => {
    return (
        <Button variant="secondary" size={{base: "xs", sm: "sm"}} paddingX="6px !important" {...style}>
            <AiOutlineGlobal/>
            English
            <GoChevronDown/>
        </Button>
    )
}