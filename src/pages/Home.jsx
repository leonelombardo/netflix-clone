import { Stack, Flex, Button, Text, Image, Box } from '@chakra-ui/react'

import { Wrapper } from '../components/Wrapper'
import { HomeNav } from '../components/HomeNav'
import { HomeHeader } from '../components/HomeHeader'

import { FAQAccordion } from '../components/FAQAccordion'
import { PrimaryInput } from '../components/PrimaryInput'

import { FAQ_ITEMS } from '../faq_items'
import { HomeSections } from '../components/HomeSections'
import { GetStartedButton } from '../components/GetStartedButton'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <Wrapper>
            <Stack width="100vw" minWidth={280} minHeight={{base: "70vh", sm: "100vh"}} height="100%" objectFit="cover" position="relative" overflow="hidden" borderBottom="8px solid #222">
                <Image src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/61fa856f-eabc-473a-aa9a-c743c3b4f598/AR-en-20221017-popsignuptwoweeks-perspective_alpha_website_medium.jpg" position="absolute" top="0" left="0" width="100%" height="100vh" objectFit="cover" zIndex={0}/>
                <Box margin="0 !important" background="linear-gradient(180deg, rgba(2,2,2, 1) -5%, rgba(2,2,2,0.35) 35%, rgba(2,2,2,0.9) 100%)" width="100%" height="100%" zIndex={0}>
                    <HomeNav/>
                    <HomeHeader/>
                </Box>
            </Stack>
            <HomeSections/>
            <Flex direction="column" alignItems="center" width="100vw" minWidth={280} zIndex={2} borderBottom="8px solid #222" padding={{base: "50px 5%", lg: "70px 45px"}} gap={10}>
                <Text fontSize={{base: 26, sm: 38, lg: 50}} fontWeight={500} textAlign={{base: "center", lg: "left"}}>Frequently Asked Questions</Text>
                <Flex direction="column" gap={2} margin="0 auto" maxWidth={815} width="100%">
                    {
                        FAQ_ITEMS && FAQ_ITEMS.map(item => <FAQAccordion key={item.id} title={item.title} description={item.description}/>)
                    }
                </Flex>
                <Flex direction="column" gap={6} width="100%">
                    <Text fontSize={20} padding="0 10%">Ready to watch? Enter your email to create or restart your membership.</Text>
                    <Stack flexDirection={{base: "column", lg: "row"}} gap={{base: 6, lg: 0}} justifyContent="center" alignItems="center" maxWidth="100%" width="100%">
                        <PrimaryInput placeholder="Email address"/>
                        <GetStartedButton>Get Started</GetStartedButton>
                    </Stack>
                </Flex>
            </Flex>
            <Footer/>
        </Wrapper>
    )
}