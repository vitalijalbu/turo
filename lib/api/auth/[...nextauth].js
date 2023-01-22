import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // the secret is required, otherwise you will face 'JWEDecryptionFailed' error
    secret: process.env.NEXTAUTH_SECRET,

    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Sign in with Email",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // return (
                /**
                 * This function is used to define if the user is authenticated or not.
                 * If authenticated, the function should return an object contains the user data.
                 * If not, the function should return `null`.
                 */
                if (credentials == null) return null;
                /**
                 * credentials is defined in the config above.
                 * We can expect it contains two properties: `email` and `password`
                 */

                // using axios is recommended but optional. You can use native fetch() or other libraries.
                try {
                    const { user, jwt } =
                        (await axios
                            .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/local`, {
                                identifier: credentials.email, /* identifier can be the username, instead of the email */
                                password: credentials.password,
                            })
                            .then(async (response) => {
                                console.log({ response, headers: {
                                    headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + response.data.jwt
                                  }} })
                                const user = (await axios
                                    .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/me?populate=*`, {
                                        headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': 'Bearer ' + response.data.jwt
                                      }})).data
                                return {user, jwt: response.data.jwt};
                            })
                            .catch((error) => {
                                console.log(error.response);
                                throw new Error(error.response.data.message);
                            })) || null;
                    console.log({ jwt, ...user })
                    return { jwt, ...user };
                } catch (error) {
                    console.warn(error);
                    // Sign In Fail
                    // return null;
                }
                // );
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.jwt = user.jwt;
                token.user = user; /* ### */
            }
            return Promise.resolve(token);
        },
        session: async ({ session, token }) => {
            session.id = token.id;
            session.jwt = token.jwt;
            session.user = token.user; /* ### */
            return Promise.resolve(session);
        },
        events: {
            async signOut(user) {
              await logout(user);
            },
          },
    },
});