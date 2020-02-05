import gql from 'graphql-tag';

export const allCharacters = gql`
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

export const findCharacterById = gql`
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
