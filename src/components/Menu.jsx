import React from "react";
import { Link } from "react-router-dom";

import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

export default function Menu() {
  return (
    <Flex p="4" boxShadow="base">
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
        <IconButton
          colorScheme="teal"
          aria-label="Profile Settings"
          variant="outline"
          size="md"
          icon={<SettingsIcon />}
        />
      </Box>
    </Flex>
  );
}
