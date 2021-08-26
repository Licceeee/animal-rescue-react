import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { VERIFYACCOUNT } from "../../api/auth";

import { Flex, Text } from "@chakra-ui/react";

export default function ActivateAccount() {
  const { token } = useParams();
  const [response, setResponse] = useState(null);

  const [verifyAccount, { data, loading, error }] = useMutation(VERIFYACCOUNT);

  useEffect(() => {
    verifyAccount({ variables: { token: token } });
  }, [verifyAccount, token]);

  useEffect(() => {
    data && setResponse(data);
  }, [data]);

  return (
    <Flex
      flexDirection="column"
      flexWrap="nowrap"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      padding="2vw"
      h="80vh"
    >
      <Text fontSize="5xl" pb="20px">
        Account Activation
      </Text>
      {error && <Text fontSize="3xl">Error... {error.message}</Text>}
      {loading && <Text fontSize="3xl">Loading... </Text>}

      {response && response.verifyAccount.success === true && (
        <Text fontSize="3xl">Loading... </Text>
      )}
      {response &&
        response.verifyAccount.success === false &&
        response.verifyAccount.errors.nonFieldErrors.map((error) => {
          return (
            <Text key={error.code} fontSize="3xl">
              {error.message}
            </Text>
          );
        })}
    </Flex>
  );
}
