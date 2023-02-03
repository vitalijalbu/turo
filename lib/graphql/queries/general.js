import { gql, request } from 'graphql-request';


// Get all blogs
export const GET_LISTING_TYPES = gql`
{
  categories(group: "listings", level: 1) {
    id
    title
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