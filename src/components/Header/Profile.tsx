import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

export function Profile(){
  return(
    <Flex
      align='center'
    >
      <Box mr='4' textAlign='right'>
        <Text>Flavio Santos</Text>
        <Text color='gray.300' fontSize='small'>flvSantos300@gmail.com</Text>
      </Box>

      <Avatar size='md' name='Flavio Santos' src='http://github.com/flvSantos15.png'/>
    </Flex>
  )
}