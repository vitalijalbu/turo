import { GraphQLClient } from "graphql-request"
import { CRAFT_CMS_URL, CRAFT_CMS_GRAPHQL_TOKEN } from "../constants"
console.log('CRAFT_CMS_URL', CRAFT_CMS_URL);

export const gql_client = (previewParams = {}) => {
  const headers = {
    authorization: `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`
  }

  let API_URL = CRAFT_CMS_URL

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

    API_URL = token ? `${CRAFT_CMS_URL}?token=${token}` : API_URL
  }

  return new GraphQLClient(API_URL, {
    headers
  })
}

export const graphqlClient = new GraphQLClient(CRAFT_CMS_URL, {
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
   //'Authentication': `Bearer: ${CRAFT_CMS_GRAPHQL_TOKEN}`)}
  }
})
