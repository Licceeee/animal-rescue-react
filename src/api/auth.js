import { gql } from "@apollo/client";

const VERIFYACCOUNT = gql`
  mutation VerifyAccount($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;

export { VERIFYACCOUNT };
