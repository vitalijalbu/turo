import { gql } from 'graphql-request';
import graphQLClient from '../client';


export const getSpotlightListings = async () => {
  // Query here
  const QUERY = gql`
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
  const data = await graphQLClient.request(QUERY);
  return data;

}

export const getListing = async (id) => {
  // Get all blogs
const QUERY = gql`
query {
  entry(section: "listings", id:"${id}") {
        id
        title
        postDate @formatDateTime(format: "d M Y")
        ... on listings_default_Entry {
          postDate @formatDateTime(format: "d M Y")
          slug
          status
          author {
            id
            fullName
          }
          ... on listings_default_Entry {
            id
            badge
            excerpt
            total_floors
            media_photos{
              url
            }
            property_status
            pricing
          }
        }
      }
        related_listings: entries(section: "listings", limit: 8 ) {
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
            media_photos(limit:4){
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

