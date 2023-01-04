import { Stack, Flex, Button } from '@chakra-ui/react'

import { NetflixLogo } from '../components/NetflixLogo'
import { LanguageButton } from './LanguageButton'

export const HomeNav = () => {
    return (
        <Stack as="nav" display="flex" flexDirection="row" alignItems="start" justifyContent="space-between" gap={{base: 6, sm: 8}} backgroundColor="#00000000" paddingY={7} paddingX={{base: 4, sm: 14}} width="100%" zIndex={99999}>
            <NetflixLogo/>
            <Flex marginTop="0 !important" gap={{base: 3, sm: 6}}>
                <LanguageButton/>
                <Button variant="primary" size={{base: "xs", sm: "sm"}}>Sign In</Button>
            </Flex>
        </Stack>
    )
}