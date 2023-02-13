import { gql, request } from 'graphql-request';
import graphQLClient from '../client';
import { getSession } from '../client';

const session = getSession();




export const getProfile = async () => {
  const id = session.user.id;
  // Get all blogs
 const QUERY = gql`
{
  user(id:"${id}") {
    id
    email
    fullName
    firstName
    lastName
    dateCreated @formatDateTime(format: "d M Y")
    photo {
      url
    }
    ... on User {
      phoneNumber
    }
    addresses {
      id
      addressLine1
      addressLine2
      administrativeArea
      countryCode
      firstName
      postalCode
      lastName
      locality
      organization
      organizationTaxId
    }
  }
}
`
  const data = await graphQLClient.request(QUERY);
  return data;
}

export const getOverview = async () => {
  const id = session.user.id;
  // Get all blogs
 const QUERY = gql`
{
  user(id:"${id}") {
    id
    fullName
    dateCreated @formatDateTime(format: "d M Y")
    photo{
      url
    }
}

`
  const data = await graphQLClient.request(QUERY);
  return data;
}


export const getUserListings = async () => {
  // Get all blogs
 const QUERY = gql`
{
  entries(section:"listings") {
    id
    title
    postDate
    slug
    status
    dateCreated @formatDateTime(format: "d M Y")
    dateUpdated @formatDateTime(format: "d M Y")
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
      media_photos (limit: 1){
        url
      }
      property_status
      pricing
    }
  }
}

`
  const data = await graphQLClient.request(QUERY);
  return { entries: data?.entries };
}


