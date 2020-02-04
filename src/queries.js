import {gql} from 'apollo-boost';

export const ALL_CHARACTERS = gql`
  query($length: Int, $after: String)
  {
    allPeople(first:$length, after: $after) {
      pageInfo{
          endCursor
          hasNextPage
      }
      edges {
        cursor    
        node {
          id
          name
          species{
            name
          }
          homeworld {
            name
          }
        }
      }
    }
  }
`;

export const FIND_CHARACTER_BY_ID = gql`
  query ($id: ID)
  {
    person(id: $id) {
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection{
          edges{
              node{
                  id
                  name
              }   
          }
      }
    }
  }
`;
