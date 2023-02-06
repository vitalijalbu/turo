import { GraphQLClient } from "graphql-request"
import { CRAFT_CMS_GRAPHQL_URL, CRAFT_CMS_GRAPHQL_TOKEN } from "../constants"

const initialState = {
  jwt: typeof window !== "undefined" ? window.localStorage.getItem('jwt') : false,
  user: typeof window !== "undefined" ? window.localStorage.getItem('user') : false,
};




export const setSession = ({jwt, user}) => {
  if (typeof window !== 'undefined') {
    if(jwt)
    {
        localStorage.setItem('jwt', jwt);
    } 
    if(user)
    {
        localStorage.setItem('user', JSON.stringify(user));
    }
    
  }
};

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
    //'Bearer': initialState.jwt,
    'Accept': "application/json",
    "Content-Type": "application/json"
  }
}) 



export default graphQLClient;