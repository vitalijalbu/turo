import { gql, request } from 'graphql-request';


// Get all blogs
export const GET_ALL_HOSTS = gql`
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
export const GET_HOST = gql`
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