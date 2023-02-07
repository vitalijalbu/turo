import { gql, request } from 'graphql-request';
import graphQLClient from '../client';

export const getAllRequests = async () => {
  // Get all blogs
const QUERY = gql`
query {
  entries(section: "requests") {
    id
    title
    dateCreated @formatDateTime(format: "d M Y")
    author{
      fullName
      id
    }
    ... on requests_default_Entry {
      message
      location{
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


export const viewRequest = async (id) => {
  // Get all blogs
const QUERY = gql`
query {
  entry(section: "requests", id:"${id}") {
    id
    title
    dateCreated @formatDateTime(format: "d M Y")
    author{
      fullName
      id
    }
    ... on requests_default_Entry {
      message
      location{
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