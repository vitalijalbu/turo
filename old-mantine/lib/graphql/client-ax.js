import { GraphQLClient } from "graphql-request";


const getLocalStorage = () =>
  typeof window !== "undefined" ? window?.localStorage : undefined;

const initialState = {
  jwt: getLocalStorage()?.getItem("jwt"),
  user: getLocalStorage()?.getItem("user"),
};

const instance = new GraphQLClient(
  process.env.NEXT_PUBLIC_CRAFT_CMS_URL,
  {
    headers: {
    "Content-Type": "application/json",
  },
});

console.log(instance)
/* Get User Session */
export const setSession = ({ jwt, user }) => {
  if (jwt) {
    getLocalStorage()?.setItem("jwt", jwt);
  }
  if (user) {
    getLocalStorage()?.setItem("user", JSON.stringify(user));
  }
};

export const getSession = () => {
  if (initialState.user && initialState.jwt) {
    return {
      ...initialState,
      ...(initialState.user ? { user: JSON.parse(initialState.user) } : {}),
      userInitials() {
        return this.user
          ? `${this.user.first_name?.[0].toLocaleUpperCase() ?? '?'}${this.user.last_name?.[0].toLocaleUpperCase() ?? '?'}`
          : `?`;
      },
      isAdmin() {
        return this.user ? this.user.role?.type === ADMIN : false;
      },
      companyId() {
        return this.user?.company?.id;
      }
    };
  } else {
    return;
  }
};

export const removeSession = () => {
  getLocalStorage()?.removeItem("jwt");
  getLocalStorage()?.removeItem("user");
};

/*
instance.interceptors.request.use((config) => {
  const jwt = getLocalStorage()?.getItem("jwt");
  if (jwt) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${jwt}`,
    };
  }
  return config;
});
*/
export default instance;


