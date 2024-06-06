import {z} from "zod";

export const CredentialsSchema = z.object({
  username: z.string().min(3).max(64),
  password: z.string().min(3).max(64),
});
