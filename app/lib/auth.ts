import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import User from "./user";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from 'next-auth';
import NextAuth from "next-auth"
import {CredentialsSchema} from "@/app/lib/validation";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        username: {label: "Username", type: "text", placeholder: "johndoe"},
        password: {label: "Password", type: "password", placeholder: "securepassword123"}
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.username || !credentials.password) return null;

        const parsedCredentials = CredentialsSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const dbUser = await User.findUserByUsername(username);

          if (dbUser && await bcrypt.compare(password, dbUser.password)) {
            return {id: dbUser.id.toString(), name: dbUser.username};
          }
        }

        return null;
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      checks: ["none"]
    })
  ],
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        domain: "localhost",
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: false
      }
    }
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt"
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 3,
  },
  callbacks: {
    authorized(params) {
      return !!params.auth?.user;
    },
    async jwt({token, user}) {
      if (user) {
        token = {
          ...token,
          ...user
        };
      }
      return token;
    },
    async session({session, token}) {
      if (token) {
        session.user = {
          id: token?.id || '',
          name: token.name,
        };
      }
      return session;
    },
  }
};

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth(authConfig)
