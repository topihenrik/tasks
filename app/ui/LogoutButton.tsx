"use client"
import Button from "@/stories/Button/Button";
import {logout} from "@/app/lib/actions";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button
        type="submit"
        color="secondary"
      >
        Logout
      </Button>
    </form>
  )
}
