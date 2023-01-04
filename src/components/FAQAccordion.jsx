import { useState } from 'react'
import { Flex, Icon, Text, Button } from "@chakra-ui/react"
import { AnimatePresence, motion } from 'framer-motion'

import { VscAdd } from 'react-icons/vsc'

export const FAQAccordion = ({title, description}) => {
    const [isClosed, setIsClosed] = useState(true)

    const handleCLick = () => {
        setIsClosed(prev => !prev)
    }

    const descriptionVariants = {
        initial: {
            y: -200
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            y: -200,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        
            <Flex direction="column" gap={0.5} overflow="hidden">
                <Flex alignItems="center" justifyContent="space-between" backgroundColor="secondary.300" paddingY={5} paddingX={7} gap={4} zIndex={1}>
                    <Text fontSize={{base: 18, sm: 20, lg: 27}} lineHeight={1.3}  textAlign="left">{title ?? "Error"}</Text>
                    <Button variant="unstyled" onClick={handleCLick}>
                        {
                            isClosed
                            ? <Icon as={VscAdd} fill="accent.500" fontSize={32}/>
                            : <Icon as={VscAdd} fill="accent.500" fontSize={32} transform="rotate(45deg)"/>
                        }
                    </Button>
                </Flex>
                <AnimatePresence>

                {
                    isClosed
                        ? ""
                        :   <Flex as={motion.div} {...descriptionVariants} backgroundColor="secondary.300" padding={8}>
                                <Text fontSize={{base: 18, sm: 20, lg: 27}} textAlign="left" lineHeight={1.3}>{description ?? "Error"}</Text>
                            </Flex>
                }
                </AnimatePresence>
            </Flex>
    )
}