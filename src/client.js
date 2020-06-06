import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

const link = new HttpLink({ uri: "http://rickandmortyapi.com/graphql" });
const cache = new InMemoryCache();

const client = new ApolloClient({
	link,
	cache,
});

const query = gql`
	{
		characters {
			results {
				name
				species
				gender
			}
		}
	}
`;

client.query({ query }).then((res) => console.log(res));

export default client;
