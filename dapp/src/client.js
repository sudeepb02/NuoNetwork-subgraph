import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/id/QmZFNaC8SVS9ZokSeY1eWQz4CmsGsx1Q4qBdPpvirjEpb6",
  // uri: "https://api.thegraph.com/subgraphs/id/QmUN7bVLbWMZ9TJuBoexvjxncBKP9Y8BLY5fjogHs2sZda",
  cache
});