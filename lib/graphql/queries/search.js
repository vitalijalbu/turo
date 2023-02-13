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
        property_status(label: true)
        pricing
        yearConstruction
        superficieTotale
        totalRooms
        category{
          title
        }
        media_photos(limit: 6){
          url
        }
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
  const data = await graphQLClient.request(QUERY);
  return data;

}
