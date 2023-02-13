import { gql, request } from "graphql-request";
import graphQLClient from "../client";

export const actionCreate = async (data) => {
    // Get all blogs
    const QUERY = gql`
      mutation createRequest {
        register(
          ${data}
        ) {
          id
        }
      }
    `;
  
    const data = await graphQLClient.request(QUERY);
    return data;
  };
  