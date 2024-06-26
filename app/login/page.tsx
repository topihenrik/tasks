"use client"
import TextField from "@/stories/TextField/TextField";
import Button from "@/stories/Button/Button";
import Heading from "@/stories/Heading/Heading";
// import { signIn } from "next-auth/react";
import {useRouter} from "next/navigation";
import Divider from "@/stories/Divider/Divider";
import AuthButton from "@/stories/Button/AuthButton";
import {PressEvent} from "@react-types/shared/src/events";
import {FormEvent, useState} from "react";
// import {revalidatePath} from "next/cache";
import {useFormState, useFormStatus} from "react-dom";
import {credentialLogin, logout} from "@/app/lib/actions";
import {signIn} from "@/app/lib/auth";
import LoginOAuth from "@/app/ui/LoginOAuth";
import InlineAlert from "@/stories/InlineAlert/InlineAlert";

function Submit() {
  const {pending} = useFormStatus();
  return <Button type="submit" className="mt-4" color="primary" isLoading={pending}>Login</Button>;
}

export default function LoginPage() {
  const [state, dispatch] = useFormState(credentialLogin, undefined);

  return (
    <div className="flex flex-col gap-4 w-[400px]">
      <div className="flex items-center bg-blue-600 shadow-xl rounded-xl p-8">
        <Heading level={3} className="text-white font-semibold">
          📝 Tasks
        </Heading>
      </div>
      <div className="flex flex-col border-2 border-solid border-gray-100 shadow-xl rounded-xl p-8">
        <div className="flex flex-col gap-4">
          <Heading level={5}>Please login to continue</Heading>
        </div>
        <LoginOAuth/>
        <Divider>Or with email and password</Divider>
        <form action={dispatch} className="flex flex-col gap-2">
          {state?.message &&
              <InlineAlert color="error" message={state.message}/>
          }
          <TextField
            label="Username"
            placeholder="Username"
            type="text"
            name="username"
            startIcon="UserRound"
          />
          <TextField
            label="Password"
            placeholder="Password"
            type="password"
            name="password"
            startIcon="KeyRound"
          />
          <Submit/>
        </form>
      </div>
    </div>
  )
}
