import React from 'react';
import { Query } from '@apollo/react-components';

import {allCharacters} from '../graphql/queries';

import CharactersView from './charactersView';
import LoadingView from "./loadingView";

const length = 5;

const CharactersQuery = () => (
  <Query query={allCharacters} variables={{length: length}}>
    {({ loading, data, fetchMore }) => {
      if(loading) return <LoadingView complete={true}/>;

       return data && (
         <CharactersView
           characters={data.allPeople.edges || []}
           onLoadMore={() =>

             fetchMore({
               variables: {
                 length: length,
                 after: data.allPeople.pageInfo.endCursor
               },
               updateQuery: (prev, { fetchMoreResult }) => {
                 if (!fetchMoreResult.allPeople.pageInfo.hasNextPage) return prev;

                 return Object.assign({}, prev, {
                   allPeople: {__typename: "PeopleConnection", edges: [...prev.allPeople.edges, ...fetchMoreResult.allPeople.edges], pageInfo: fetchMoreResult.allPeople.pageInfo},
                 });
               }
             })
           }
         />
       )
      }
    }
  </Query>
);

export default CharactersQuery;
