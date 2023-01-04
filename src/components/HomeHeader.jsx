import { Stack, Text, Button } from "@chakra-ui/react"
import { GetStartedButton } from "./GetStartedButton"

import { PrimaryInput } from "./PrimaryInput"

export const HomeHeader = () => {
    return (
        <Stack as="header" maxWidth={950} width="85%" height="85%" justifyContent={{base: "start", sm: "center"}} alignItems="center" gap={4} margin="0 auto" paddingY={{base: 30, sm: 75}}>
            <Text as="h2" fontSize={{base: 28, sm: 64}} fontWeight={500} margin={{base: "0", lg: "0 155px"}}>
                Unlimited movies, TV shows, and more.
            </Text>    
            <Stack alignItems="center" gap={{base: 3, lg: 6}}>
                <Text as="p" fontSize={{base: 18, sm: 26}}>
                    Watch anywhere. Cancel anytime.
                </Text>
                <Text as="p" fontSize={{base: 18, sm: 19}} lineHeight={1.3}>
                    Ready to watch? Enter your email to create or restart your membership.
                </Text>
            </Stack>
            <Stack flexDirection={{base: "column", lg: "row"}} gap={{base: 6, lg: 0}} justifyContent="center" alignItems="center" maxWidth="100%" width="100%">
                <PrimaryInput placeholder="Email address"/>
                <GetStartedButton>Get Started</GetStartedButton>
            </Stack>
        </Stack>
    )
}