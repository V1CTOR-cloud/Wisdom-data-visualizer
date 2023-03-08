import {
    Box,
    Tag,
    Avatar,
    TagLabel,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    IconButton,
    Heading,
    Text,
    Code,
    Show,
    Highlight
} from "@chakra-ui/react";
import moment from 'moment';

import { React, useEffect } from 'react'

export default function List_component(props) {

    useEffect(() => {
        props.init.pop()
    }, [])

    return (
        <Accordion
            allowToggle
            marginTop={5}
            bgColor={'#E0E5EC'}
            borderRadius={5}
            border='none'
        >
            <AccordionItem
                border='none'
            >
                <Heading>
                    <AccordionButton
                        padding={'10px'}
                    >
                        <Box
                            flex='1'
                            textAlign='left'
                            display={'flex'}
                            alignItems={'center'}
                            gap={3}
                        >
                            <Text as="span" fontSize={'md'}>{props.prompt}</Text>
                            <Tag size='md' colorScheme='green' borderRadius='full'>
                                <TagLabel>{props.status} </TagLabel>
                            </Tag>
                            <Show above="sm">
                                <Tag size='md' colorScheme='red' borderRadius='full'>
                                    <TagLabel>{props.lng} </TagLabel>
                                </Tag>
                            </Show>
                            <Show above="lg">
                                <Tag size='md' colorScheme='blue' borderRadius='full'>
                                    <TagLabel>{moment().startOf('hour').fromNow()} </TagLabel>
                                </Tag>
                            </Show>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Heading>
                <AccordionPanel
                    padding={5}
                    borderBottomRadius={5}
                    display={'flex'}
                    gap={10}
                    flexDirection={'column'}
                >
                    {props.init.map((block, key) =>
                        <Code
                            key={key}
                            children={block}
                            bgColor={'#011627'}
                            padding={'10px'}
                            color={"#b9c2d0"}
                            borderRadius={5}
                        />)}
                    <Heading size={'md'}>
                        <Highlight
                            query={['Response:']}
                            styles={{ px: '5', py: '2', rounded: 'full', bg: 'orange.200' }}
                        >
                            Response:
                        </Highlight>

                    </Heading>
                    <Code
                        children={props.response}
                        bgColor={'#011627'}
                        padding={'10px'}
                        color={"#b9c2d0"}
                        borderRadius={5}
                    />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
