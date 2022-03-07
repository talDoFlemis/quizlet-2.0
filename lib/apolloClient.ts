import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client"
import { SchemaLink } from "@apollo/client/link/schema"
import { schema } from "../graphql/schema"

function createStaticApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema: schema }),
    cache: new InMemoryCache({}),
  })
}

export default createStaticApolloClient
