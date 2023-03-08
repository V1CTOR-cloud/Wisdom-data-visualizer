import { Box, Image, Show, Hide, list } from '@chakra-ui/react'
import { React, useState, useEffect } from 'react'
import Card_data from '../components/commons/card_data/Card_data'
import HeaderComponent from '../components/commons/header/Header_component'
import List_component from '../components/commons/List/List_component'

const list_icon = require('../assets/icons/list_icon.png')
const grid_icon = require('../assets/icons/grid_icon.png')
const active = '#d0d5db'
const inactive = '#E0E5EC'
const json = require('../data/wisdom/2023-03-06/undefined/5a0cc0988e24d75cd2f337007516389f.json');

function JsonDecoder(raw_data) {
    return raw_data.split('\n');
}

export default function Landing_view() {
    const [trim_data, set_trim_data] = useState([]);
    const [list_active, set_list_active] = useState(0);

    useEffect(() => {
        set_trim_data(JsonDecoder(json.propmt.init).filter(n => n))
    }, []);

    return (
        <Box>
            <HeaderComponent
                tittle='SkyView - Wisdom data'
                avatar={json.propmt.user.name}
            />
            {/* Options */}
            <Show above='lg'>
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
                            bgColor={list_active % 2 === 0 ? active : inactive}
                            borderLeftRadius={100}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={"center"}
                            cursor={'pointer'}
                            onClick={() => set_list_active(list_active + 1)}
                        >
                            <Image
                                height={'75%'}
                                fallbackSrc={list_icon}
                            />
                        </Box>
                        <Box
                            h={'100%'}
                            w={'50%'}
                            bgColor={list_active % 2 === 1 ? active : inactive}
                            borderRightRadius={100}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={"center"}
                            cursor={'pointer'}
                            onClick={() => set_list_active(list_active + 1)}
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
            <Box
                display={list_active % 2 === 0 ? 'block' : 'none'}
            >
                <List_component
                    response={json.response.text}
                    questions={json.propmt.questions}
                    answers={json.propmt.answers}
                    counter={json.propmt.counter}
                    init={trim_data}
                    prompt={json.propmt.prompt}
                    status={json.response.statusText}
                    lng={json.propmt.lng}
                    start={json.propmt.start}
                />
            </Box>
            <Box
                display={list_active % 2 === 1 ? 'block' : 'none'}
            >
                <Card_data
                    avatar={json.propmt.user.name}
                    location={json.propmt.user.location}
                    questions={json.propmt.questions}
                    answers={json.propmt.answers}
                    counter={json.propmt.counter}
                />
            </Box>
        </Box>
    )
}
