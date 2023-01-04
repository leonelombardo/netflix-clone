import { Flex, Image } from "@chakra-ui/react"

import { HomeSection } from "./HomeSection"
import { DownloadYourShowsToWatchOffline } from "./DownloadYourShowsToWatchOffline"

import tv from "../assets/images/tv.png"
import tvVideo from "../assets/videos/tv-video.mp4"
import phone from "../assets/images/phone.jpg"
import tvTabletPhone from "../assets/images/tv-tablet-phone.png"
import strangerThingsVideo from "../assets/videos/stranger-things.mp4"
import createProfilesForKids from "../assets/images/kids.png"

export const HomeSections = () => {
    return (
        <>
            <HomeSection titleLeft="Enjoy on your TV." descriptionLeft="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.">
                <Image src={tv} zIndex={1}/>
                <Flex as="video" position="absolute" marginTop="-4" zIndex="0" width="75%" autoPlay loop muted>
                    <source src={tvVideo}/>
                </Flex>
            </HomeSection>
            <HomeSection titleRight="Download your shows to watch offline." descriptionRight="Save your favorites easily and always have something to watch.">
                <Flex flexDirection="column" alignItems="center" position="relative">
                    <Image src={phone}/>
                    <DownloadYourShowsToWatchOffline/>
                </Flex>
            </HomeSection>
            <HomeSection titleLeft="Watch everywhere." descriptionLeft="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.">
                <Image src={tvTabletPhone} zIndex={1} marginTop="10"/>
                <Flex as="video" position="absolute" marginTop={{base: "-8", sm: "-20"}} zIndex="0" width="65%" autoPlay loop muted>
                    <source src={strangerThingsVideo}/>
                </Flex>
            </HomeSection>
            <HomeSection titleRight="Create profiles for kids." descriptionRight="Send kids on adventures with their favorite characters in a space made just for them—free with your membership.">
                <Image src={createProfilesForKids} marginTop={16}/>
            </HomeSection>
        </>
    )
}