"use client"
import TextField from "@/stories/TextField/TextField";
import PersonIcon from '../../public/icons/person.svg'
import KeyIcon from "../../public/icons/key.svg";
import Button from "@/stories/Button/Button";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center bg-blue-600 rounded-xl p-8">
        <h1 className="text-white text-2xl">
          Tasks ✅
        </h1>
      </div>
      <div className="bg-gray-100 rounded-xl p-8">
        <form className="flex flex-col gap-4">
          <h1 className="text-xl">Please log in to continue</h1>
          <TextField label="Username" placeholder="Username" type="text" value="" startIcon={PersonIcon}/>
          <TextField label="Password" placeholder="Password" type="password" value="" startIcon={KeyIcon}/>
          <Button color="primary">Login</Button>
        </form>
      </div>
    </div>
  )
}