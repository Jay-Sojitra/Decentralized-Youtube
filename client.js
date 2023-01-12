import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
uri: "https://api.thegraph.com/subgraphs/name/jay-sojitra/blog-yt-clone",
cache: new InMemoryCache(),
});

export default client;
