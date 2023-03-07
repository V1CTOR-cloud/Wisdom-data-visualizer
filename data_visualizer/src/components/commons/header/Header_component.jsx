import React from 'react'
import { Box, Image, Heading, Avatar, Show, Hide } from '@chakra-ui/react'
export default function Header_component() {
  return (
    <Box
      h={'15vh'}
      w={'100%'}
      bgColor='#E0E5EC'
      boxShadow={'-5px 5px 10px rgba(203, 211, 220, 0.2), 5px -5px 10px rgba(203, 211, 220, 0.2), -5px -5px 10px rgba(249, 255, 255, 0.9), 5px 5px 13px rgba(203, 211, 220, 0.9), inset 1px 1px 2px rgba(249, 255, 255, 0.3), inset -1px -1px 2px rgba(203, 211, 220, 0.5);'}
      borderRadius='5px'
      display={'flex'}
      alignItems='center'
      padding={'1rem'}
      position='relative'
    >
      <Box
        h={'100%'}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
        gap={5}
      >
        <Image
          h={'100%'}
          src='https://www.coffeeclass.io/logos/chakra-ui.png'
          alt='Your logo' />
        <Hide below='md'>
          <Heading
            as='h1'
            size='lg'
            noOfLines={1}
          >Wisdom data Visualizer</Heading>
        </Hide>
        <Avatar
          size='md'
          name='Víctor martínez'
          src='https://avatars.githubusercontent.com/u/74670245?v=4'
          position='absolute'
          right={0}
          marginRight={'1.5rem'}
        />
      </Box>
    </Box>
  )
}
