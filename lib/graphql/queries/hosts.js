import { gql, request } from 'graphql-request';


// Get all blogs
export const FIND_ALL = gql`
{
  users(group: "hosts") {
    id
    fullName
  }
}
`

// Get all blogs
export const FIND_ONE = gql`
{
  users(group: "hosts") {
    id
    fullName
  }
}
`