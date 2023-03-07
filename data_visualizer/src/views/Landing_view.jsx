import { Box, Image, Show, Hide } from '@chakra-ui/react'
import React from 'react'
import HeaderComponent from '../components/commons/header/Header_component'
import List_component from '../components/commons/List/List_component'
const list_icon = require('../assets/icons/list_icon.png')
const grid_icon = require('../assets/icons/grid_icon.png')
const active = '#d0d5db'
const inactive = '#E0E5EC'
export default function Landing_view() {
    return (
        <Box>
            <HeaderComponent />
            {/* Options */}
            <Show above='sm'>
                <Box
                    h={'8vh'}
                    w={'100%'}
                    display={'flex'}
                    justifyContent={"center"}
                    alignItems={'center'}
                    marginTop={5}
                    position="relative"
                >
                    <Box
                        h={'80%'}
                        w={'8vw'}
                        position='absolute'
                        right={5}
                        borderRadius={100}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={"center"}
                        flexDirection={'row'}
                    >
                        <Box
                            h={'100%'}
                            w={'50%'}
                            bgColor={active}
                            borderLeftRadius={100}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={"center"}
                            cursor={'pointer'}
                        >
                            <Image
                                height={'75%'}
                                fallbackSrc={list_icon}
                            />
                        </Box>
                        <Box
                            h={'100%'}
                            w={'50%'}
                            bgColor={inactive}
                            borderRightRadius={100}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={"center"}
                            cursor={'pointer'}
                        >
                            <Image
                                height={'75%'}
                                fallbackSrc={grid_icon}
                            />
                        </Box>
                    </Box>
                </Box>
            </Show>
            {/* Options */}
            <List_component />
        </Box>
    )
}
