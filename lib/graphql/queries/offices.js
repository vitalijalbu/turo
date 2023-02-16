import { gql, request } from 'graphql-request';
import graphQLClient from '../client';


export const getAllHosts = async () => {
  // Get all blogs
const QUERY = gql`
{
  entries(section: "offices") {
    id
    title
    dateCreated @formatDateTime(format: "d M Y")
    ... on offices_default_Entry {
      website
      email
      phoneNumber
      avatarImg {
        url
      }
      location {
        address
        parts {
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

