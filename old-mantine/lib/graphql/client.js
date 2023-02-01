import { GraphQLClient } from "graphql-request"
import { CRAFT_CMS_GRAPHQL_URL, CRAFT_CMS_GRAPHQL_TOKEN } from "../constants"
/*
export const cmsClient = (previewParams = {}) => {
  const headers = {
    authorization: `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`
  }

  let API_URL = CRAFT_CMS_GRAPHQL_URL

  if (previewParams && previewParams?.token) {
    const {
      token,
      "x-craft-preview": xCraftPreview,
      "x-craft-live-preview": xCraftLivePreview
    } = previewParams

    if (xCraftPreview) {
      headers["x-craft-preview"] = xCraftPreview
    }

    if (xCraftLivePreview) {
      headers["x-craft-live-preview"] = xCraftLivePreview
    }

    API_URL = token ? `${CRAFT_CMS_GRAPHQL_URL}?token=${token}` : API_URL
  }

  return new GraphQLClient(API_URL, {
    headers
  })
}

export const graphqlClient = new GraphQLClient(CRAFT_CMS_GRAPHQL_URL, {
  headers: {
    Authentication: `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`
  }
})
*/



const graphQLClient = new GraphQLClient(CRAFT_CMS_GRAPHQL_URL, {
  headers: {
    //'Bearer': CRAFT_CMS_GRAPHQL_TOKEN,
    'Accept': "application/json",
    "Content-Type": "application/json"
  }
}) 



export default graphQLClient;