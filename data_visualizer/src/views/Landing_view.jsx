import {
    Box,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Heading,
    FormControl,
    FormLabel,
    ModalFooter,
    Button,
    IconButton,
    Show,
    Hide,
    FormHelperText,
    Input,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    UseDisclosureProps, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip
} from '@chakra-ui/react'
import { SearchIcon, ChevronUpIcon, } from '@chakra-ui/icons'
import { React, useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Card_data from '../components/commons/card_data/Card_data'
import HeaderComponent from '../components/commons/header/Header_component'
import List_component from '../components/commons/List/List_component'

const list_icon = require('../assets/icons/list_icon.png')
const grid_icon = require('../assets/icons/grid_icon.png')
const filter_icon = require('../assets/icons/binoculars_icon.png')
const active = '#d0d5db'
const inactive = '#E0E5EC'

const json1 = require('../data/wisdom/2023-03-06/undefined/1.json');
const json2 = require('../data/wisdom/2023-03-06/undefined/2.json');
const json3 = require('../data/wisdom/2023-03-06/undefined/3.json');
const json4 = require('../data/wisdom/2023-03-06/undefined/4.json');
const json5 = require('../data/wisdom/2023-03-06/undefined/5.json');
const json6 = require('../data/wisdom/2023-03-06/undefined/6.json');
const json7 = require('../data/wisdom/2023-03-06/undefined/7.json');
const json8 = require('../data/wisdom/2023-03-06/undefined/8.json');
const json9 = require('../data/wisdom/2023-03-06/undefined/9.json');
const json10 = require('../data/wisdom/2023-03-06/undefined/10.json');

const json11 = require('../data/wisdom/2023-03-06/undefined/11.json');
const json12 = require('../data/wisdom/2023-03-06/undefined/12.json');
const json13 = require('../data/wisdom/2023-03-06/undefined/13.json');
const json14 = require('../data/wisdom/2023-03-06/undefined/14.json');
const json15 = require('../data/wisdom/2023-03-06/undefined/15.json');
const json16 = require('../data/wisdom/2023-03-06/undefined/16.json');
const json17 = require('../data/wisdom/2023-03-06/undefined/17.json');
const json18 = require('../data/wisdom/2023-03-06/undefined/18.json');
const json19 = require('../data/wisdom/2023-03-06/undefined/19.json');
const json20 = require('../data/wisdom/2023-03-06/undefined/20.json');
const json21 = require('../data/wisdom/2023-03-06/undefined/21.json');
const json22 = require('../data/wisdom/2023-03-06/undefined/22.json');
const json23 = require('../data/wisdom/2023-03-06/undefined/23.json');
const json24 = require('../data/wisdom/2023-03-06/undefined/24.json');
const json25 = require('../data/wisdom/2023-03-06/undefined/25.json');

function JsonDecoder(raw_data) {
    return raw_data.trim().split('\n');
}

export default function Landing_view() {
    const [trim_data1, set_trim_data1] = useState([]);
    const [trim_data2, set_trim_data2] = useState([]);
    const [trim_data3, set_trim_data3] = useState([]);
    const [trim_data4, set_trim_data4] = useState([]);
    const [trim_data5, set_trim_data5] = useState([]);
    const [trim_data6, set_trim_data6] = useState([]);
    const [trim_data7, set_trim_data7] = useState([]);
    const [trim_data8, set_trim_data8] = useState([]);
    const [trim_data9, set_trim_data9] = useState([]);
    const [trim_data10, set_trim_data10] = useState([]);

    const [trim_data11, set_trim_data11] = useState([]);
    const [trim_data12, set_trim_data12] = useState([]);
    const [trim_data13, set_trim_data13] = useState([]);
    const [trim_data14, set_trim_data14] = useState([]);
    const [trim_data15, set_trim_data15] = useState([]);
    const [trim_data16, set_trim_data16] = useState([]);
    const [trim_data17, set_trim_data17] = useState([]);
    const [trim_data18, set_trim_data18] = useState([]);
    const [trim_data19, set_trim_data19] = useState([]);
    const [trim_data20, set_trim_data20] = useState([]);

    const [trim_data21, set_trim_data21] = useState([]);
    const [trim_data22, set_trim_data22] = useState([]);
    const [trim_data23, set_trim_data23] = useState([]);
    const [trim_data24, set_trim_data24] = useState([]);
    const [trim_data25, set_trim_data25] = useState([]);

    const [list_active, set_list_active] = useState(0);
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [sliderValue, setSliderValue] = useState(5)
    const [showTooltip, setShowTooltip] = useState(false)
    

    useEffect(() => {
        set_trim_data1(JsonDecoder(json1.propmt.init).filter(n => n))
        set_trim_data2(JsonDecoder(json2.propmt.init).filter(n => n))
        set_trim_data3(JsonDecoder(json3.propmt.init).filter(n => n))
        set_trim_data4(JsonDecoder(json4.propmt.init).filter(n => n))
        set_trim_data5(JsonDecoder(json5.propmt.init).filter(n => n))
        set_trim_data6(JsonDecoder(json6.propmt.init).filter(n => n))
        set_trim_data7(JsonDecoder(json7.propmt.init).filter(n => n))
        set_trim_data8(JsonDecoder(json8.propmt.init).filter(n => n))
        set_trim_data9(JsonDecoder(json9.propmt.init).filter(n => n))
        set_trim_data10(JsonDecoder(json10.propmt.init).filter(n => n))

        set_trim_data11(JsonDecoder(json11.propmt.init).filter(n => n))
        set_trim_data12(JsonDecoder(json12.propmt.init).filter(n => n))
        set_trim_data13(JsonDecoder(json13.propmt.init).filter(n => n))
        set_trim_data14(JsonDecoder(json14.propmt.init).filter(n => n))
        set_trim_data15(JsonDecoder(json15.propmt.init).filter(n => n))
        set_trim_data16(JsonDecoder(json16.propmt.init).filter(n => n))
        set_trim_data17(JsonDecoder(json17.propmt.init).filter(n => n))
        set_trim_data18(JsonDecoder(json18.propmt.init).filter(n => n))
        set_trim_data19(JsonDecoder(json19.propmt.init).filter(n => n))
        set_trim_data20(JsonDecoder(json20.propmt.init).filter(n => n))

        set_trim_data21(JsonDecoder(json21.propmt.init).filter(n => n))
        set_trim_data22(JsonDecoder(json22.propmt.init).filter(n => n))
        set_trim_data23(JsonDecoder(json23.propmt.init).filter(n => n))
        set_trim_data24(JsonDecoder(json24.propmt.init).filter(n => n))
        set_trim_data25(JsonDecoder(json25.propmt.init).filter(n => n))
    }, []);

    return (
        <Box
            id='home'
        >
            <HeaderComponent
                tittle='SkyView - Wisdom data'
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
                    <Show above='md'>
                        <InputGroup
                            position={'absolute'}
                            left={0}
                            w={'30%'}
                        >
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.300' />}
                            />
                            <Input
                                type='text'
                                placeholder='Search By Tittle or User'
                                disabled={true}
                            />
                            <IconButton
                                onClick={onOpen}
                                position={'relative'}
                                left={10}
                                colorScheme='teal'
                                aria-label='Call Segun'
                                size='md'
                                icon={
                                    <Image
                                        src={filter_icon}
                                        h={'50%'}
                                    />}
                            />
                        </InputGroup>
                    </Show>
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
            <Show>
                <Box
                    display={list_active % 2 === 0 ? 'block' : 'none'}
                >
                    <List_component
                        response={json1.response.text.trim}
                        questions={json1.propmt.questions}
                        answers={json1.propmt.answers}
                        counter={json1.propmt.counter}
                        init={trim_data1}
                        prompt={json1.propmt.prompt}
                        status={json1.response.statusText}
                        lng={json1.propmt.lng}
                        start={json1.propmt.start}
                    />
                    <List_component
                        response={json2.response.text}
                        questions={json2.propmt.questions}
                        answers={json2.propmt.answers}
                        counter={json2.propmt.counter}
                        init={trim_data2}
                        prompt={json2.propmt.prompt}
                        status={json2.response.statusText}
                        lng={json2.propmt.lng}
                        start={json2.propmt.start}
                    />

                    <List_component
                        response={json3.response.text}
                        questions={json3.propmt.questions}
                        answers={json3.propmt.answers}
                        counter={json3.propmt.counter}
                        init={trim_data3}
                        prompt={json3.propmt.prompt}
                        status={json3.response.statusText}
                        lng={json3.propmt.lng}
                        start={json3.propmt.start}
                    />

                    <List_component
                        response={json4.response.text}
                        questions={json4.propmt.questions}
                        answers={json4.propmt.answers}
                        counter={json4.propmt.counter}
                        init={trim_data4}
                        prompt={json4.propmt.prompt}
                        status={json4.response.statusText}
                        lng={json4.propmt.lng}
                        start={json4.propmt.start}
                    />

                    <List_component
                        response={json5.response.text}
                        questions={json5.propmt.questions}
                        answers={json5.propmt.answers}
                        counter={json5.propmt.counter}
                        init={trim_data5}
                        prompt={json5.propmt.prompt}
                        status={json5.response.statusText}
                        lng={json5.propmt.lng}
                        start={json5.propmt.start}
                    />

                    <List_component
                        response={json6.response.text}
                        questions={json6.propmt.questions}
                        answers={json6.propmt.answers}
                        counter={json6.propmt.counter}
                        init={trim_data6}
                        prompt={json6.propmt.prompt}
                        status={json6.response.statusText}
                        lng={json6.propmt.lng}
                        start={json6.propmt.start}
                    />

                    <List_component
                        response={json7.response.text}
                        questions={json7.propmt.questions}
                        answers={json7.propmt.answers}
                        counter={json7.propmt.counter}
                        init={trim_data7}
                        prompt={json7.propmt.prompt}
                        status={json7.response.statusText}
                        lng={json7.propmt.lng}
                        start={json7.propmt.start}
                    />

                    <List_component
                        response={json8.response.text}
                        questions={json8.propmt.questions}
                        answers={json8.propmt.answers}
                        counter={json8.propmt.counter}
                        init={trim_data8}
                        prompt={json8.propmt.prompt}
                        status={json8.response.statusText}
                        lng={json8.propmt.lng}
                        start={json8.propmt.start}
                    />

                    <List_component
                        response={json9.response.text}
                        questions={json9.propmt.questions}
                        answers={json9.propmt.answers}
                        counter={json9.propmt.counter}
                        init={trim_data9}
                        prompt={json9.propmt.prompt}
                        status={json9.response.statusText}
                        lng={json9.propmt.lng}
                        start={json9.propmt.start}
                    />

                    <List_component
                        response={json10.response.text}
                        questions={json10.propmt.questions}
                        answers={json10.propmt.answers}
                        counter={json10.propmt.counter}
                        init={trim_data10}
                        prompt={json10.propmt.prompt}
                        status={json10.response.statusText}
                        lng={json10.propmt.lng}
                        start={json10.propmt.start}
                    />

                    <List_component
                        response={json11.response.text}
                        questions={json11.propmt.questions}
                        answers={json11.propmt.answers}
                        counter={json11.propmt.counter}
                        init={trim_data11}
                        prompt={json11.propmt.prompt}
                        status={json11.response.statusText}
                        lng={json11.propmt.lng}
                        start={json11.propmt.start}
                    />
                    <List_component
                        response={json12.response.text}
                        questions={json12.propmt.questions}
                        answers={json12.propmt.answers}
                        counter={json12.propmt.counter}
                        init={trim_data12}
                        prompt={json12.propmt.prompt}
                        status={json12.response.statusText}
                        lng={json12.propmt.lng}
                        start={json12.propmt.start}
                    />

                    <List_component
                        response={json13.response.text}
                        questions={json13.propmt.questions}
                        answers={json13.propmt.answers}
                        counter={json13.propmt.counter}
                        init={trim_data13}
                        prompt={json13.propmt.prompt}
                        status={json13.response.statusText}
                        lng={json13.propmt.lng}
                        start={json13.propmt.start}
                    />

                    <List_component
                        response={json14.response.text}
                        questions={json14.propmt.questions}
                        answers={json14.propmt.answers}
                        counter={json14.propmt.counter}
                        init={trim_data14}
                        prompt={json14.propmt.prompt}
                        status={json14.response.statusText}
                        lng={json14.propmt.lng}
                        start={json14.propmt.start}
                    />

                    <List_component
                        response={json15.response.text}
                        questions={json15.propmt.questions}
                        answers={json15.propmt.answers}
                        counter={json15.propmt.counter}
                        init={trim_data15}
                        prompt={json15.propmt.prompt}
                        status={json15.response.statusText}
                        lng={json15.propmt.lng}
                        start={json15.propmt.start}
                    />

                    <List_component
                        response={json16.response.text}
                        questions={json16.propmt.questions}
                        answers={json16.propmt.answers}
                        counter={json16.propmt.counter}
                        init={trim_data16}
                        prompt={json16.propmt.prompt}
                        status={json16.response.statusText}
                        lng={json16.propmt.lng}
                        start={json16.propmt.start}
                    />

                    <List_component
                        response={json17.response.text}
                        questions={json17.propmt.questions}
                        answers={json17.propmt.answers}
                        counter={json17.propmt.counter}
                        init={trim_data17}
                        prompt={json17.propmt.prompt}
                        status={json17.response.statusText}
                        lng={json17.propmt.lng}
                        start={json17.propmt.start}
                    />

                    <List_component
                        response={json18.response.text}
                        questions={json18.propmt.questions}
                        answers={json18.propmt.answers}
                        counter={json18.propmt.counter}
                        init={trim_data18}
                        prompt={json18.propmt.prompt}
                        status={json18.response.statusText}
                        lng={json18.propmt.lng}
                        start={json18.propmt.start}
                    />

                    <List_component
                        response={json19.response.text}
                        questions={json19.propmt.questions}
                        answers={json19.propmt.answers}
                        counter={json19.propmt.counter}
                        init={trim_data19}
                        prompt={json19.propmt.prompt}
                        status={json19.response.statusText}
                        lng={json19.propmt.lng}
                        start={json19.propmt.start}
                    />

                    <List_component
                        response={json20.response.text}
                        questions={json20.propmt.questions}
                        answers={json20.propmt.answers}
                        counter={json20.propmt.counter}
                        init={trim_data20}
                        prompt={json20.propmt.prompt}
                        status={json20.response.statusText}
                        lng={json20.propmt.lng}
                        start={json20.propmt.start}
                    />

                    <List_component
                        response={json21.response.text}
                        questions={json21.propmt.questions}
                        answers={json21.propmt.answers}
                        counter={json21.propmt.counter}
                        init={trim_data21}
                        prompt={json21.propmt.prompt}
                        status={json21.response.statusText}
                        lng={json21.propmt.lng}
                        start={json21.propmt.start}
                    />

                    <List_component
                        response={json22.response.text}
                        questions={json22.propmt.questions}
                        answers={json22.propmt.answers}
                        counter={json22.propmt.counter}
                        init={trim_data22}
                        prompt={json22.propmt.prompt}
                        status={json22.response.statusText}
                        lng={json22.propmt.lng}
                        start={json22.propmt.start}
                    />

                    <List_component
                        response={json23.response.text}
                        questions={json23.propmt.questions}
                        answers={json23.propmt.answers}
                        counter={json23.propmt.counter}
                        init={trim_data23}
                        prompt={json23.propmt.prompt}
                        status={json23.response.statusText}
                        lng={json23.propmt.lng}
                        start={json23.propmt.start}
                    />

                    <List_component
                        response={json24.response.text}
                        questions={json24.propmt.questions}
                        answers={json24.propmt.answers}
                        counter={json24.propmt.counter}
                        init={trim_data24}
                        prompt={json24.propmt.prompt}
                        status={json24.response.statusText}
                        lng={json24.propmt.lng}
                        start={json24.propmt.start}
                    />

                    <List_component
                        response={json25.response.text}
                        questions={json25.propmt.questions}
                        answers={json25.propmt.answers}
                        counter={json25.propmt.counter}
                        init={trim_data25}
                        prompt={json25.propmt.prompt}
                        status={json25.response.statusText}
                        lng={json25.propmt.lng}
                        start={json25.propmt.start}
                    />
                </Box>
            </Show>
            <SimpleGrid
                columns={3}
                spacing={10}
                p="10px"
                display={list_active % 2 === 1 ? 'grid' : 'none'}
            >
                <Card_data
                    avatar={json1.propmt.user.name}
                    location={json1.propmt.user.location}
                    questions={json1.propmt.questions}
                    answers={json1.propmt.answers}
                    counter={json1.propmt.counter}
                    status={json1.response.statusText}
                    lng={json1.propmt.lng}
                    start={json1.propmt.start}
                />
                <Card_data
                    avatar={json2.propmt.user.name}
                    location={json2.propmt.user.location}
                    questions={json2.propmt.questions}
                    answers={json2.propmt.answers}
                    counter={json2.propmt.counter}
                    status={json2.response.statusText}
                    lng={json2.propmt.lng}
                    start={json2.propmt.start}
                />
                <Card_data
                    avatar={json3.propmt.user.name}
                    location={json3.propmt.user.location}
                    questions={json3.propmt.questions}
                    answers={json3.propmt.answers}
                    counter={json3.propmt.counter}
                    status={json3.response.statusText}
                    lng={json3.propmt.lng}
                    start={json3.propmt.start}
                />
                <Card_data
                    avatar={json4.propmt.user.name}
                    location={json4.propmt.user.location}
                    questions={json4.propmt.questions}
                    answers={json4.propmt.answers}
                    counter={json4.propmt.counter}
                    status={json4.response.statusText}
                    lng={json4.propmt.lng}
                    start={json4.propmt.start}
                />
                <Card_data
                    avatar={json5.propmt.user.name}
                    location={json5.propmt.user.location}
                    questions={json5.propmt.questions}
                    answers={json5.propmt.answers}
                    counter={json5.propmt.counter}
                    status={json5.response.statusText}
                    lng={json5.propmt.lng}
                    start={json5.propmt.start}
                />
                <Card_data
                    avatar={json6.propmt.user.name}
                    location={json6.propmt.user.location}
                    questions={json6.propmt.questions}
                    answers={json6.propmt.answers}
                    counter={json6.propmt.counter}
                    status={json6.response.statusText}
                    lng={json6.propmt.lng}
                    start={json6.propmt.start}
                /><Card_data
                    avatar={json7.propmt.user.name}
                    location={json7.propmt.user.location}
                    questions={json7.propmt.questions}
                    answers={json7.propmt.answers}
                    counter={json7.propmt.counter}
                    status={json7.response.statusText}
                    lng={json7.propmt.lng}
                    start={json7.propmt.start}
                />
                <Card_data
                    avatar={json8.propmt.user.name}
                    location={json8.propmt.user.location}
                    questions={json8.propmt.questions}
                    answers={json8.propmt.answers}
                    counter={json8.propmt.counter}
                    status={json8.response.statusText}
                    lng={json8.propmt.lng}
                    start={json8.propmt.start}
                />
                <Card_data
                    avatar={json9.propmt.user.name}
                    location={json9.propmt.user.location}
                    questions={json9.propmt.questions}
                    answers={json9.propmt.answers}
                    counter={json9.propmt.counter}
                    status={json9.response.statusText}
                    lng={json9.propmt.lng}
                    start={json9.propmt.start}
                />
                <Card_data
                    avatar={json10.propmt.user.name}
                    location={json10.propmt.user.location}
                    questions={json10.propmt.questions}
                    answers={json10.propmt.answers}
                    counter={json10.propmt.counter}
                    status={json10.response.statusText}
                    lng={json10.propmt.lng}
                    start={json10.propmt.start}
                />
                <Card_data
                    avatar={json11.propmt.user.name}
                    location={json11.propmt.user.location}
                    questions={json11.propmt.questions}
                    answers={json11.propmt.answers}
                    counter={json11.propmt.counter}
                    status={json11.response.statusText}
                    lng={json11.propmt.lng}
                    start={json11.propmt.start}
                />
                <Card_data
                    avatar={json12.propmt.user.name}
                    location={json12.propmt.user.location}
                    questions={json12.propmt.questions}
                    answers={json12.propmt.answers}
                    counter={json12.propmt.counter}
                    status={json12.response.statusText}
                    lng={json12.propmt.lng}
                    start={json12.propmt.start}
                />
                <Card_data
                    avatar={json13.propmt.user.name}
                    location={json13.propmt.user.location}
                    questions={json13.propmt.questions}
                    answers={json13.propmt.answers}
                    counter={json13.propmt.counter}
                    status={json13.response.statusText}
                    lng={json13.propmt.lng}
                    start={json13.propmt.start}
                />
                <Card_data
                    avatar={json14.propmt.user.name}
                    location={json14.propmt.user.location}
                    questions={json14.propmt.questions}
                    answers={json14.propmt.answers}
                    counter={json14.propmt.counter}
                    status={json14.response.statusText}
                    lng={json14.propmt.lng}
                    start={json14.propmt.start}
                />
                <Card_data
                    avatar={json15.propmt.user.name}
                    location={json15.propmt.user.location}
                    questions={json15.propmt.questions}
                    answers={json15.propmt.answers}
                    counter={json15.propmt.counter}
                    status={json15.response.statusText}
                    lng={json15.propmt.lng}
                    start={json15.propmt.start}
                />
                <Card_data
                    avatar={json16.propmt.user.name}
                    location={json16.propmt.user.location}
                    questions={json16.propmt.questions}
                    answers={json16.propmt.answers}
                    counter={json16.propmt.counter}
                    status={json16.response.statusText}
                    lng={json6.propmt.lng}
                    start={json16.propmt.start}
                />
                <Card_data
                    avatar={json17.propmt.user.name}
                    location={json17.propmt.user.location}
                    questions={json17.propmt.questions}
                    answers={json17.propmt.answers}
                    counter={json17.propmt.counter}
                    status={json17.response.statusText}
                    lng={json17.propmt.lng}
                    start={json17.propmt.start}
                />
                <Card_data
                    avatar={json18.propmt.user.name}
                    location={json18.propmt.user.location}
                    questions={json18.propmt.questions}
                    answers={json18.propmt.answers}
                    counter={json18.propmt.counter}
                    status={json18.response.statusText}
                    lng={json18.propmt.lng}
                    start={json18.propmt.start}
                />
                <Card_data
                    avatar={json19.propmt.user.name}
                    location={json19.propmt.user.location}
                    questions={json19.propmt.questions}
                    answers={json19.propmt.answers}
                    counter={json19.propmt.counter}
                    status={json19.response.statusText}
                    lng={json19.propmt.lng}
                    start={json19.propmt.start}
                />
                <Card_data
                    avatar={json20.propmt.user.name}
                    location={json20.propmt.user.location}
                    questions={json20.propmt.questions}
                    answers={json20.propmt.answers}
                    counter={json20.propmt.counter}
                    status={json20.response.statusText}
                    lng={json20.propmt.lng}
                    start={json20.propmt.start}
                />
                <Card_data
                    avatar={json21.propmt.user.name}
                    location={json21.propmt.user.location}
                    questions={json21.propmt.questions}
                    answers={json21.propmt.answers}
                    counter={json21.propmt.counter}
                    status={json21.response.statusText}
                    lng={json21.propmt.lng}
                    start={json21.propmt.start}
                />
                <Card_data
                    avatar={json22.propmt.user.name}
                    location={json22.propmt.user.location}
                    questions={json22.propmt.questions}
                    answers={json22.propmt.answers}
                    counter={json22.propmt.counter}
                    status={json22.response.statusText}
                    lng={json22.propmt.lng}
                    start={json22.propmt.start}
                />
                <Card_data
                    avatar={json23.propmt.user.name}
                    location={json23.propmt.user.location}
                    questions={json23.propmt.questions}
                    answers={json23.propmt.answers}
                    counter={json23.propmt.counter}
                    status={json23.response.statusText}
                    lng={json23.propmt.lng}
                    start={json23.propmt.start}
                />
                <Card_data
                    avatar={json24.propmt.user.name}
                    location={json24.propmt.user.location}
                    questions={json24.propmt.questions}
                    answers={json24.propmt.answers}
                    counter={json24.propmt.counter}
                    status={json24.response.statusText}
                    lng={json24.propmt.lng}
                    start={json24.propmt.start}
                />
                <Card_data
                    avatar={json25.propmt.user.name}
                    location={json25.propmt.user.location}
                    questions={json25.propmt.questions}
                    answers={json25.propmt.answers}
                    counter={json25.propmt.counter}
                    status={json25.response.statusText}
                    lng={json25.propmt.lng}
                    start={json25.propmt.start}
                />
            </SimpleGrid>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <IconButton
                    colorScheme='teal'
                    size='lg'
                    icon={<ChevronUpIcon
                        boxSize={6}
                    />}
                    borderRadius={100}
                    position={'sticky'}
                    float='right'
                    right={10}
                    bottom={10}

                />
            </Link>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            <ModalCloseButton />
                        </ModalHeader>
                        <ModalBody>
                            <form>
                                <FormControl>
                                    <FormLabel>
                                        <Heading
                                            fontSize={'2xl'}
                                        >
                                            Filters
                                        </Heading>
                                    </FormLabel>
                                    <FormHelperText marginTop={10}>
                                        Search By user
                                    </FormHelperText>
                                    <Input type={'text'} />
                                    <FormHelperText marginTop={10}>
                                        Search By Questions
                                    </FormHelperText>
                                    <Slider
                                        id='slider'
                                        defaultValue={5}
                                        min={0}
                                        max={100}
                                        colorScheme='teal'
                                        onChange={(v) => setSliderValue(v)}
                                        onMouseEnter={() => setShowTooltip(true)}
                                        onMouseLeave={() => setShowTooltip(false)}
                                    >
                                        <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                                            25
                                        </SliderMark>
                                        <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                                            50
                                        </SliderMark>
                                        <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                                            75
                                        </SliderMark>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <Tooltip
                                            hasArrow
                                            bg='teal.500'
                                            color='white'
                                            placement='top'
                                            isOpen={showTooltip}
                                            label={`${sliderValue}`}
                                        >
                                            <SliderThumb />
                                        </Tooltip>
                                    </Slider>

                                </FormControl>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type='submit' colorScheme={'teal'} >Search</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </Box>
    )
}
