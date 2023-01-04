import { Flex, Image, Text } from "@chakra-ui/react"

import strangerThings from "../assets/images/stranger-things.png"
import strangerThingsDownloadingGif from "../assets/images/stranger-things-downloading-gif.gif"

export const DownloadYourShowsToWatchOffline = () => {
    return (
        <Flex alignItems="center"justifyContent="space-between" position="absolute" bottom="0%" zIndex="500" backgroundColor="secondary.500" padding={{base: "4px 8px", md: 4}} border="2px solid #ffffff50" borderRadius={12} gap={4} minWidth="15em" width={{base: "80%", md: "70%"}} boxShadow="0 0 2em 0 #000">
            <Image src={strangerThings} zIndex="1" height={{base: "3em", md: "4em"}} objectFit="cover"/>
            <Flex flexDirection="column" alignItems="start" gap={2} flex={1}>
                <Text as="h4" textAlign="left" fontWeight="semibold" fontSize={{base: 14.5, md: 16}}>Stranger Things</Text>
                <Text as="p" textAlign="left" fontWeight="normal" fontSize={{base: 12, md: 14}} color="blue.500">Downloading...</Text>
            </Flex>
            <Flex backgroundImage={`url(${strangerThingsDownloadingGif})`} backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="100%" width="48px" height="60px"></Flex>
        </Flex>
    )
}