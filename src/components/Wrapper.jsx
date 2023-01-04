import { Container } from "@chakra-ui/react"

export const Wrapper = ({style, children}) => {
    return (
        <Container as="main" minWidth="100%" width="100vw" minHeight="100%" height="100vh" display="flex" flexDirection="column" alignItems="center" backgroundColor="secondary.500" {...style}>
            {children}
        </Container>
    )
}