"use client"
import TextField from "@/stories/TextField/TextField";
import PersonIcon from '../../public/icons/person.svg'
import KeyIcon from "../../public/icons/key.svg";
import Button from "@/stories/Button/Button";
import Heading from "@/stories/Heading/Heading";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 w-96">
      <div className="flex items-center bg-blue-600 rounded-xl p-8">
        <Heading level={3} className="text-white">
          Tasks
        </Heading>
      </div>
      <div className="bg-gray-100 rounded-xl p-8">
        <form className="flex flex-col gap-4">
          <Heading level={5}>Please log in to continue</Heading>
          <TextField
            label="Username"
            placeholder="Username"
            type="text" value=""
            startIcon={PersonIcon}
          />
          <TextField
            label="Password"
            placeholder="Password"
            type="password" value=""
            startIcon={KeyIcon}
          />
          <Button color="primary">Login</Button>
        </form>
      </div>
    </div>
  )
}