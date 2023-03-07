import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { accordionAnatomy } from '@chakra-ui/anatomy'
import React from 'react'
export default function List_component() {
    return (
        <Accordion
            marginTop={10}
            defaultIndex={[0]} allowMultiple>
            <AccordionItem >
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            Section 1 title
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem marginTop={10}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            Section 2 title
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
