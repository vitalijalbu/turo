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


export const viewOffice = async (id) => {
  // Get all blogs
 const QUERY = gql`
 {
  entry(section: "offices", id: "${id}") {
    id
    slug
    title
    status
    dateCreated @formatDateTime(format: "d M Y")
    ... on offices_default_Entry {
      avatarImg {
        url
      }
      phoneNumber
      website
    }
  }
  entries(section: "listings", relatedToEntries: {section: "offices", id: "${id}"}) {
    id
    title
    ... on listings_default_Entry {
      badge(label: true)
      total_floors
      property_status(label: true)
      pricing
      yearConstruction
      superficieTotale
      totalRooms
      category {
        title
      }
      media_photos(limit: 6) {
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

