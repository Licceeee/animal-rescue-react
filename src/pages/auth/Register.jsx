import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";

import { REGISTER } from "../../api/auth";

import {
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function Register() {
  const [registerUser, { data, loading, error }] = useMutation(REGISTER);

  const onSubmit2 = (values) => {
    return new Promise((resolve) => {
      console.log(values["email"]);
      try {
        registerUser({
          variables: {
            email: values["email"],
            password1: values["password1"],
            password2: values["password2"],
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      resolve();
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  errors && console.log(errors["Email"]);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />

          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="password"
            {...register("password1", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />

          <FormLabel htmlFor="password">Password repeat</FormLabel>
          <Input
            id="password2"
            placeholder="password2"
            {...register("name", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
}
