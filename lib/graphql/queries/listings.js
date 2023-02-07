import { gql } from 'graphql-request';


// Get all blogs
export const FIND_ALL = gql`
query {
  entries(orderBy: "postDate", section: "listings", limit: 8) {
    id
    title
    postDate
    slug
    status
    host: author {
      id
      fullName,
    }
  }
}
`

// Get all blogs
export const FIND_SPOTLIGHT = gql`
{
  entries(orderBy: "postDate", section: "listings", limit: 8) {
    id
    title
    postDate
    slug
    status
    author {
      id
      fullName
    }
    ... on listings_default_Entry {
      id
      badge
      total_floors
      media_photos{
        url
      }
      property_status
      pricing
      location{
        address
        parts{
            city
        }
    }
    }
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


