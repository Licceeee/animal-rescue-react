import React from "react";

import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex bg="gray.200" flexDirection="column">
      <Link to="/activate">Go to activation </Link>
      <Link to="/activate">Go to activation </Link>
    </Flex>
  );
}
