import React from "react";
import { Link } from "react-router-dom";

import {
  Flex,
  Spacer,
  Box,
  Heading,
  IconButton,
  Button,
  Menu,
  MenuButton,
  ChevronDownIcon,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import { SettingsIcon } from "@chakra-ui/icons";

export default function NavBar() {
  return (
    <Flex p="4" boxShadow="base">
      <Menu>
        <Box p="2">
          <Heading size="md">
            <Link to="/">Wet Cat App</Link>
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Link to="/register">
            <Button colorScheme="gray" mr="4">
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button colorScheme="teal" mr="4">
              Sign In
            </Button>
          </Link>
          {/* <IconButton
          colorScheme="teal"
          aria-label="Profile Settings"
          variant="outline"
          size="md"
          icon={<SettingsIcon />}
        /> */}
          <MenuButton
            as={Button}
            aria-label="Profile Settings"
            colorScheme="teal"
            variant="outline"
            rightIcon={<SettingsIcon />}
          >
            Settings
          </MenuButton>
          <MenuList>
            <MenuItem>New File</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuDivider />
            <MenuItem>Open...</MenuItem>
            <MenuItem>Log out</MenuItem>
          </MenuList>
        </Box>
      </Menu>
    </Flex>

    // <Menu p="4" boxShadow="base">
    //   <MenuButton
    //     as={Button}
    //     aria-label="Profile Settings"
    //     colorScheme="teal"
    //     variant="outline"
    //     rightIcon={<SettingsIcon />}
    //   >
    //     Actions
    //   </MenuButton>
    //   <MenuList>
    //     <MenuItem>New File</MenuItem>
    //     <MenuItem>New Window</MenuItem>
    //     <MenuDivider />
    //     <MenuItem>Open...</MenuItem>
    //     <MenuItem>Save File</MenuItem>
    //   </MenuList>
    // </Menu>
  );
}

// <Menu>
//   <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//     Actions
//   </MenuButton>
//   <MenuList>
//     <MenuItem>Download</MenuItem>
//     <MenuItem>Create a Copy</MenuItem>
//     <MenuItem>Mark as Draft</MenuItem>
//     <MenuItem>Delete</MenuItem>
//     <MenuItem>Attend a Workshop</MenuItem>
//   </MenuList>
// </Menu>
