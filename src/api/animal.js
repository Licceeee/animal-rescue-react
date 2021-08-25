import { gql } from "@apollo/client";

const ANIMALS = gql`
  query {
    animals {
      id
    }
  }
`;

export { ANIMALS };