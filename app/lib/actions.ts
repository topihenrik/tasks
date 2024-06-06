"use server"
import {CredentialsSchema} from "@/app/lib/validation";
import User from "@/app/lib/user";
import bcrypt from "bcryptjs";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "@/app/lib/auth";
import {AuthError} from "next-auth";

export type State = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string;
};

export async function createUser(prevState: State | undefined, formData: FormData) {
  try {
    const validatedFields = CredentialsSchema.safeParse({
      username: formData.get('username'),
      password: formData.get('password')
    })

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing fields.',
      };
    }

    const {username, password} = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.createUser({username, password: hashedPassword});
  } catch (error) {
    console.error(error);
    return {
      message: "Failed to create user",
    }
  }

  revalidatePath('/');
  redirect('/');
}

export async function credentialLogin(prevState: State | undefined, formData: FormData) {
  try {


    await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirectTo: '/',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            message: 'Invalid credentials.'
          }
        default:
          return {
            message: 'Invalid credentials.'
          }
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut();
}

