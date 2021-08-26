import React from "react";

import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      flexDirection="column"
      flexWrap="nowrap"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="space-between"
      padding="2vw"
    >
      <Link to="/activate">Go to activation </Link>
      <Link to="/activate">Go to activation </Link>
    </Flex>
  );
}
