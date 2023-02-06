import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getAllCategories = async () => {
  // Get all blogs
const QUERY = gql`
query {
  categories(group: "listing_type", level: 1) {
    id
    title
    slug
    ... on listing_type_Category {
      id
      media_url {
        url
      }
    }
  }
}
`

  const data = await graphQLClient.request(QUERY);
  return data;

}