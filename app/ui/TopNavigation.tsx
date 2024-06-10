"use client"
import Button from "@/stories/Button/Button";
import {TopNav} from "@/stories/TopNav/TopNav";
import LogoutButton from "@/app/ui/LogoutButton";
import {useRouter} from "next/navigation";

export default function TopNavigation() {
  const router = useRouter()
  const leftItems = [
    <Button onPress={() => router.push('/dashboard/account')} key="account" color="primary">Account</Button>,
    <LogoutButton key="logout"/>
  ]

  return <TopNav leftItems={leftItems}/>;
}
