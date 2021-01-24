import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Button,
  useColorMode,
  IconButton,
  useDisclosure,
  ReactRouterLink,
  Center,
  Text,
  Square,
  VStack,
  StackDivider,
  Table,
  Td,
  Tr,
  Thead,
  Th,
  Tbody,
  TableCaption,
  CircularProgress,
  Badge,
  Progress,
  Divider,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SessionService from '../Services/SessionService';

// sidebar nav config

function Sidebar() {


  return (
    <>
      <Flex
        paddingTop="10px"
        h="800px"
        left="0px"
        top="0px"
        width={{ base: '100%', md: '300px' }}
        height={{ base: '520px', md: '100%' }}
        borderTop="1px"
        borderTopColor="gray.600"
        borderTopWidth="90px"
        position="fixed"
        rounded="md"
        backgroundColor="gray.700"
        zIndex="30"
      >
        <Box
          width="100%"
          borderStyle="solid"
          borderColor="gray.600"
          borderWidth="0px"
        >

          <Box h="50px" mb="70px">
            <Center>
              <Text color="white">{JSON.parse(SessionService.getdata()).full_name + ""}</Text>
            </Center>
            <Center mb="10px">
              <Badge variant="solid" colorScheme="green">
                Online
              </Badge>
            </Center>
            <Progress
              ml="50px"
              mr="50px"
              colorScheme="green"
              size="xs"
              isIndeterminate
            />
          </Box>

          <Box width="100%">
            <VStack
              divider={<StackDivider borderColor="gray.500" />}
              spacing={5}
              align="stretch"
            >



              <Link as={ReactRouterLink} to="/home">
                <Button
                  h="50px"
                  w="100%"
                  _hover={{
                    background: 'gray.800',
                    color: 'white',
                    transitionDuration: '0.6s',
                  }}
                  rounded="box"
                  boxShadow="dark-lg"
                  colorScheme="gray.600"
                >
                  Overview
                </Button>
              </Link>
              <Link as={ReactRouterLink} to="/Account_Details">
                <Button
                  h="50px"
                  w="100%"
                  _hover={{
                    background: 'gray.800',
                    color: 'white',
                    transitionDuration: '0.6s',
                  }}
                  rounded="box"
                  boxShadow="dark-lg"
                  colorScheme="gray.600"
                >
                  <Center>Personal Details</Center>
                </Button>
              </Link>

              <Link as={ReactRouterLink} to="/Contact_Details">
                <Button
                  h="50px"
                  w="100%"
                  _hover={{
                    background: 'gray.800',
                    color: 'white',
                    transitionDuration: '0.6s',
                  }}
                  rounded="box"
                  boxShadow="dark-lg"
                  colorScheme="gray.600"
                >
                  Contact Details
                </Button>
              </Link>

              <Link as={ReactRouterLink} to="/AllNotifications">
                <Button
                  h="50px"
                  w="100%"
                  _hover={{
                    background: 'gray.800',
                    color: 'white',
                    transitionDuration: '0.6s',
                  }}
                  rounded="box"
                  boxShadow="dark-lg"
                  colorScheme="gray.600"
                >
                  <Center>Notification</Center>
                </Button>
              </Link>

              <Link as={ReactRouterLink} to="/FogotPin">
                <Button
                  h="50px"
                  w="100%"
                  _hover={{
                    background: 'gray.800',
                    color: 'white',
                    transitionDuration: '0.6s',
                  }}
                  rounded="box"
                  boxShadow="dark-lg"
                  colorScheme="gray.600"
                >
                  <Center>Fogot Pin</Center>
                </Button>
              </Link>


              <Divider orientation="horizontal" />
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default Sidebar;
