import { gql, request } from "graphql-request";
import graphQLClient from "../client";

export const actionCreate = async () => {
    // Get all blogs
    const QUERY = gql`
      mutation Register {
        register(
          email: "james@testingthings.com"
          password: "testing123"
          fullName: "James Edmonston"
          customField: "A value"
        ) {
          jwt
          jwtExpiresAt
          refreshToken
          refreshTokenExpiresAt
          user {
            id
            fullName
            ... on User {
              customField
            }
          }
        }
      }
    `;
  
    const data = await graphQLClient.request(QUERY);
    return data;
  };
  