import { gql, request } from 'graphql-request';


// Get all blogs
export const FIND_ALL = gql`
{
  users(group: "hosts") {
    id
    fullName
    dateCreated
    photo{
      url
    }
  }
}
`

// Get all blogs
export const FIND_ONE = gql`
{
  user(group: "hosts", id: 1) {
    id
    fullName
    dateCreated
    photo{
      url
    }
  }
  listings: entries(authorId: 1) {
    id,
    title
  }
}

`