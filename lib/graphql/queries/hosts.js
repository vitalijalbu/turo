import { gql, request } from 'graphql-request';


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

export const getHostDetails = async () => {
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
  listings: entries(authorId: 1) {
    id,
    title
  }
}

`
  return { entry } = await graphQLClient.request(QUERY);

}

