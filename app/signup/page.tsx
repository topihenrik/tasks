"use client"
import TextField from "@/stories/TextField/TextField";
import Button from "@/stories/Button/Button";
import Heading from "@/stories/Heading/Heading";
import Text from "@/stories/Text/Text";
import Link from "@/stories/Link/Link";
import Divider from "@/stories/Divider/Divider";
import AuthButton from "@/stories/Button/AuthButton";
import {createUser} from "@/app/lib/actions";
import {useFormState, useFormStatus} from 'react-dom';
import InlineAlert from "@/stories/InlineAlert/InlineAlert";

function Submit() {
  const {pending} = useFormStatus();
  return <Button type="submit" className="mt-4" color="primary" isLoading={pending}>Signup</Button>;
}

export default function SignupPage() {
  const [state, dispatch] = useFormState(createUser, undefined);

  return (
    <div className="flex flex-col gap-4 w-[400px]">
      <div className="flex items-center bg-blue-600 shadow-xl rounded-xl p-8">
        <Heading level={3} className="text-white font-semibold">
          📝 Tasks
        </Heading>
      </div>
      <div className="flex flex-col border-2 border-solid border-neutral-100 shadow-xl rounded-xl p-8">
        <div className="flex flex-col gap-4">
          <Heading level={5}>Create your account</Heading>
          <Text className="font-bold">
            {"Have an account? "}
            <Link href="/login">Log in now</Link>
          </Text>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <AuthButton startIcon="Google">Google</AuthButton>
          <AuthButton startIcon="GitHub">GitHub</AuthButton>
        </div>
        <Divider>Or with email and password</Divider>
        <form action={dispatch} className="flex flex-col gap-2">
          <InlineAlert color="error" message="Error"/>
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
