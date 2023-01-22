import { gql, request } from 'graphql-request';
import { graphqlClient } from '../client';
console.log('client', graphqlClient);


const query = gql`
query {
  users(group: "hosts") {
    id
    fullName
  }
}
`

export const findAction = () => {
  return graphqlClient.request(query)
    //then((data) => { data});
};