import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

// Get all blogs
export const GET_ALL_HOSTS = gql`
{
  users(group: "hosts") {
    id
    fullName
    dateCreated @formatDateTime(format: "d M Y")
    photo{
      url
    }
  }
}
`

export const getHostDetails = async () => {
  // Get all blogs
 const QUERY = gql`
{
  user(group: "hosts", id: 1) {
    id
    fullName
    dateCreated @formatDateTime(format: "d M Y")
    photo{
      url
    }
  }
  listings: entries(section:"listings", authorId: 52) {
    id,
    title
    ... on listings_default_Entry {
      badge(label: true)
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
  return { 
    user: data?.user,
    listings: data?.listings 
  };
}

