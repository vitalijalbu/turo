import { gql, request } from 'graphql-request';


// Get all blogs
export const GET_LISTING_TYPES = gql`
query {
  categories(group: "listing_type", level: 1) {
    id
    title
    ... on listing_type_Category {
      id
      media_url {
        url
      }
    }
  }
}
`