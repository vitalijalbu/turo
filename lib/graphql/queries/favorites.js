import { gql, request } from "graphql-request";
import graphQLClient from "../client";

export const getUserFavorites = async () => {
  // Get all blogs
  const QUERY = gql`
    {
      entries(section: "listings") {
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
          media_photos(limit: 1) {
            url
          }
          property_status
          pricing
        }
      }
    }
  `;
  const data = await graphQLClient.request(QUERY);
  return { entries: data?.entries };
};
