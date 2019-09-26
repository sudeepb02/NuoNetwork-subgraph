import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/id/QmUN7bVLbWMZ9TJuBoexvjxncBKP9Y8BLY5fjogHs2sZda",
  cache
});