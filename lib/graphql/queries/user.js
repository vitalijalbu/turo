import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

// Get all blogs
export const GET_ALL_HOSTS = gql`
{
  users(group: "hosts") {
    id
    fullName
    dateCreated
    photo{
      url
    }
  }
}
`

export const getUser = async () => {
  // Get all blogs
 const QUERY = gql`
{
  user(group: "hosts", id: 1) {
    id
    fullName
    dateCreated
    photo{
      url
    }
  }
  listings: entries(section:"listings", authorId: 1) {
    id,
    title
  }
}

`
  const data = await graphQLClient.request(QUERY);
  return { 
    user: data?.user,
    listings: data?.listings 
  };
}


export const getUserListings = async () => {
  // Get all blogs
 const QUERY = gql`
{
  entries(section:"listings", authorId: 1) {
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
      }
    }
  }
}

`
  const data = await graphQLClient.request(QUERY);
  return { entries: data?.entries };
}
