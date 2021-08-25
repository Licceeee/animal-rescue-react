import React from "react";
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
        <Heading size="md">Wet Cat App</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="gray" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal" mr="4">
          Log in
        </Button>
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
