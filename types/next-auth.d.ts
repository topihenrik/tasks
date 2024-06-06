import {DefaultJWT} from "@auth/core/jwt";
import {User} from "@auth/core/adapters";

declare module "@auth/core/adapters" {
  interface AdapterUser extends Omit<User, "email" | "emailVerified"> {
    id?: string
    name?: string | null
  }

  interface AdapterSession {
    user: User;
  }
}

declare module "@auth/core/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    name?: string | null;
  }
}
