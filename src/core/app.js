import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import CharactersQuery from '../views/charactersQuery';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://swapi-graphql-ravn.herokuapp.com/"
});

const client = new ApolloClient({
  cache,
  link
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CharactersQuery />
      </ApolloProvider>
    );
  }
}

export default App;
