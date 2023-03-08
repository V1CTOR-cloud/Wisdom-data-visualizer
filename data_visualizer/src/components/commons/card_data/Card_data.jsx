import React from 'react'
import moment from 'moment';
import { Box, Flex, Image, Avatar, Text, useColorModeValue, Tag, TagLabel } from "@chakra-ui/react";
export default function Card_data(props) {
    let boxBg = useColorModeValue("white !important", "#111c44 !important");
    let mainText = useColorModeValue("gray.800", "white");
    let secondaryText = useColorModeValue("gray.400", "gray.400");

    return (
        <Flex
            marginTop={5}
            borderRadius='20px'
            bg={boxBg}
            p='20px'
            h='345px'
            w={{ base: "315px", md: "345px" }}
            alignItems='center'
            direction='column'
            position={'relative'}
            >
            <Box 
                display={'flex'}
                gap={4}
                position={'absolute'}
                top={'30px'}
                left={10}
            >
                <Tag size='md' colorScheme='green' borderRadius='full'>
                    <TagLabel>{props.status} </TagLabel>
                </Tag>
                <Tag size='md' colorScheme='red' borderRadius='full'>
                    <TagLabel>{props.lng} </TagLabel>
                </Tag>
                <Tag size='md' colorScheme='blue' borderRadius='full'>
                    <TagLabel>{moment().startOf('hour').fromNow()} </TagLabel>
                </Tag>
            </Box>
            <Image
                src='https://i.ibb.co/xmP2pS6/Profile.png'
                maxW='100%'
                borderRadius='20px'
            />
            <Flex flexDirection='column' mb='30px'>
                <Avatar
                    name={props.avatar}
                    src='https://bit.ly/broken-link'

                    border='5px solid red'
                    mx='auto'
                    borderColor={boxBg}
                    width='68px'
                    height='68px'
                    mt='-38px'
                    borderRadius='50%'
                />
                <Text
                    fontWeight='600'
                    color={mainText}
                    textAlign='center'
                    fontSize='xl'>
                    {props.avatar}
                </Text>
                <Text
                    color={secondaryText}
                    textAlign='center'
                    fontSize='sm'
                    fontWeight='500'>
                    {props.location}
                </Text>
            </Flex>
            <Flex justify='space-between' w='100%' px='36px'>
                <Flex flexDirection='column'>
                    <Text
                        fontWeight='600'
                        color={mainText}
                        fontSize='xl'
                        textAlign='center'>
                        {props.questions}
                    </Text>
                    <Text color={secondaryText} fontWeight='500'>
                        Questions
                    </Text>
                </Flex>
                <Flex flexDirection='column'>
                    <Text
                        fontWeight='600'
                        color={mainText}
                        fontSize='xl'
                        textAlign='center'>
                        {props.answers}
                    </Text>
                    <Text color={secondaryText} fontWeight='500'>
                        Answers
                    </Text>
                </Flex>
                <Flex flexDirection='column'>
                    <Text
                        fontWeight='600'
                        fontSize='xl'
                        color={mainText}
                        textAlign='center'>
                        {props.counter}
                    </Text>
                    <Text color={secondaryText} fontWeight='500'>
                        Counter
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
