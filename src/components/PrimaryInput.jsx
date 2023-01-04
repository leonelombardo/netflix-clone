import { Flex, Input } from "@chakra-ui/react"

export const PrimaryInput = ({type, placeholder, style}) => {
    return (
        <Flex as="input" type={type} placeholder={placeholder} maxWidth={480} minWidth={280} width="100%" maxHeight={{base: "30px", lg: "60px"}} height="100%" backgroundColor="accent.500" color="secondary.500" borderRadius={2} paddingX={{base: 2, lg: 4}} paddingY={{base: 6, lg: 9}} border="none" outline="none" {...style}/>
    )
}