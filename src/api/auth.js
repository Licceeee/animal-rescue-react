import { gql } from "@apollo/client";

const VERIFYACCOUNT = gql`
  mutation VerifyAccount($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;

const USERS = gql`
  query {
    users {
      edges {
        node {
          email
        }
      }
    }
  }
`;

export { VERIFYACCOUNT, USERS };
