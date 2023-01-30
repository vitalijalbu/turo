import { gql } from 'graphql-request';


// Get all blogs
export const GET_LISTINGS = gql`
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
    }
  }
}
`
