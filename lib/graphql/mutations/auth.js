import { gql, request } from "graphql-request";
import graphQLClient, { setSession, getSession } from "../client";

export const authAction = async (body) => {
  // Get all blogs
  const QUERY = gql`
    mutation Authenticate {
      authenticate(
        email: "${body.email}", 
        password: "${body.password}"
        ) {
          jwt
          jwtExpiresAt
          refreshToken
          refreshTokenExpiresAt
          user {
            id
            fullName
            email
          }
        }
      }
  `;

   try {
    const resp = await graphQLClient.request(QUERY)    
      .then((res) => {
        setSession({ jwt: res.authenticate.jwt, user: res.authenticate.user });
        console.log('session-jwt', res.authenticate.jwt)
        console.log('session-user', res.authenticate.user)
        return res;
      })
      console.log('auth-response', resp)
    .catch((err) => {
      return Promise.reject(err);
    });
  }catch (err) {
    console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
  }

};



export const registerAction = async () => {
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
