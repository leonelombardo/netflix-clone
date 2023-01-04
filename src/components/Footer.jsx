import { Container, Flex, Text } from "@chakra-ui/react"
import { FOOTER_LINKS } from "../FOOTER_LINKS"
import { LanguageButton } from "./LanguageButton"

export const Footer = () => {
    return (
        <Container as="footer" display="flex" flexDirection="column" minWidth={280} maxWidth={1000} padding={{base: "50px 5%", sm: "70px 45px"}} gap={8}>
            <Text textAlign="left"  color="secondary.200">Questions? Call 0800 345 1594</Text>
            <Flex as="ul" display="flex" minWidth={320} maxWidth={{base: "100%", sm: "90%"}} width="100%" flexWrap="wrap">
                {
                    FOOTER_LINKS && FOOTER_LINKS.map(link => <Text as="li" key={link} fontSize={13} whiteSpace="nowrap" minWidth="150px" margin="0 0 16px 0" padding="0 12px 0 0" width="25%" textAlign="left"  color="secondary.200" cursor="pointer" _hover={{textDecoration: "underline"}}>{link}</Text>)
                }
            </Flex>
            <LanguageButton style={{size: "lg", borderColor: "secondary.300", color: "secondary.200"}}/>
            <Text textAlign="left" color="secondary.200" fontSize={13}>Netflix Argentina</Text>
        </Container>
    )
}