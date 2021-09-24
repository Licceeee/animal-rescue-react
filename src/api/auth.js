import { gql } from "@apollo/client";

const VERIFYACCOUNT = gql`
  mutation VerifyAccount($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;

const REGISTER = gql`
  mutation Register($email: String!, $password1: String!, $password2: String!) {
    register(email: $email, password1: $password1, password2: $password2) {
      token
      refreshToken
      success
      errors
    }
  }
`;

export { VERIFYACCOUNT, REGISTER };
