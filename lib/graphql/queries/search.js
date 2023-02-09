import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const searchListings = async () => {
  // Query here
  const QUERY = gql`
  {
    entries(orderBy: "postDate", section: "listings") {
      id
      title
      postDate @formatDateTime(format: "d M Y")
      slug
      status
      author {
        id
        fullName
      }
      ... on listings_default_Entry {
        badge
        total_floors
        media_photos(limit: 6){
          url
        }
        property_status
        pricing
      }
    }
  }
  `
  const data = await graphQLClient.request(QUERY);
  return data;

}
