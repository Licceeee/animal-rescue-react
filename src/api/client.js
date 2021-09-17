import { ApolloClient, InMemoryCache } from "@apollo/client";

// eslint-disable-next-line no-unused-vars
const server = "https://paw-api.tornode.org/graphql/";
// eslint-disable-next-line no-unused-vars
const local = "http://127.0.0.1:8000/graphql/";

const client = new ApolloClient({
  uri: local,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors",
  },
});

export { client };
