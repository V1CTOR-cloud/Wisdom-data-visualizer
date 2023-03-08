import React from 'react'
import { Flex, Image, Avatar, Text, useColorModeValue } from "@chakra-ui/react";
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
            direction='column'>
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
                    { props.avatar }
                </Text>
                <Text
                    color={secondaryText}
                    textAlign='center'
                    fontSize='sm'
                    fontWeight='500'>
                    { props.location}
                </Text>
            </Flex>
            <Flex justify='space-between' w='100%' px='36px'>
                <Flex flexDirection='column'>
                    <Text
                        fontWeight='600'
                        color={mainText}
                        fontSize='xl'
                        textAlign='center'>
                        { props.questions }
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
                        { props.answers }
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
                        { props.counter }
                    </Text>
                    <Text color={secondaryText} fontWeight='500'>
                        Counter
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
