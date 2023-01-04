import { Stack, Flex, Text } from "@chakra-ui/react"

export const HomeSection = ({children, titleLeft, titleRight, descriptionLeft, descriptionRight}) => {
    return (
        <Stack alignItems="center" justifyContent="center" width="100vw" minWidth={280} height="100%" zIndex={2} borderBottom="8px" borderColor="secondary.400" padding={{base: "50px 5%", lg: "70px 45px"}}>
            <Stack flexDirection={{base: titleLeft ? "column" : "column-reverse", lg: "row"}} alignItems="center" justifyContent="center" gap={8} maxWidth={1100}>
                {
                    titleLeft && descriptionLeft &&
                    <>
                        <Flex flexDirection="column" width={{base: "100%", lg: "52%"}} gap={6} zIndex={2}>
                            <Text fontSize={{base: 26, sm: 38, lg: 50}} fontWeight={500} textAlign={{base: "center", lg: "left"}}>{titleLeft ?? "Error"}</Text>
                            <Text fontSize={{base: 18, sm: 20, lg: 27}} textAlign={{base: "center", lg: "left"}} lineHeight={1.3}>{descriptionLeft ?? "Error"}</Text>
                        </Flex>
                        <Flex position="relative" alignItems="center" justifyContent="center" maxWidth={525} width="100%" overflow="hidden" gap={8} flex={1} marginTop="-14 !important">
                            {
                                children ?? "Error 404"
                            }
                        </Flex>
                    </>
                }
                {
                    titleRight && descriptionRight &&
                    <>
                        <Flex position="relative" alignItems="center" justifyContent="center" maxWidth={525} width="100%" overflow="hidden" gap={8} flex={1} marginTop="-14 !important">
                            {
                                children ?? "Error 404"
                            }
                        </Flex>
                        <Flex flexDirection="column" width={{base: "100%", lg: "52%"}} gap={6} zIndex={2}>
                            <Text fontSize={{base: 26, sm: 38, lg: 50}} fontWeight={500} textAlign={{base: "center", lg: "left"}}>{titleRight ?? "Error"}</Text>
                            <Text fontSize={{base: 18, sm: 20, lg: 27}} textAlign={{base: "center", lg: "left"}} lineHeight={1.3}>{descriptionRight ?? "Error"}</Text>
                        </Flex>
                    </>
                }
                
            </Stack>
        </Stack>
    )
}