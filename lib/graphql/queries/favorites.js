import { gql, request } from "graphql-request";
import graphQLClient, { getSession } from '../client';

const session = getSession();

export const getUserFavorites = async () => {
  const id = session.user.id;
  // Get all blogs
 const QUERY = gql`
{
  entries(section:"listings", limit: 4) {
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
      category{
        title
      }
      media_photos (limit: 6){
        url
      }
      pricing
    }
  }
}

`
  const data = await graphQLClient.request(QUERY);
  return { entries: data?.entries };
}
