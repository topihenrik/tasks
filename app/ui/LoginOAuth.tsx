"use client"
import AuthButton from "@/stories/Button/AuthButton";
import GoogleLogo from "@/public/icons/logo-google-color.svg";
import GitHubLogo from "@/public/icons/logo-github.svg";
import {signIn} from "next-auth/react";

export default function LoginOAuth() {
  function handleAuthLogin (provider: "google" | "github") {
    signIn(provider, {
      callbackUrl: '/'
    })
  }

  return (
    <div className="flex flex-col gap-4 mt-6">
      <AuthButton
        onPress={() => { handleAuthLogin('google'); }}
        startIcon="Google"
      >
        Google
      </AuthButton>
      <AuthButton
        onPress={() => { handleAuthLogin('github'); }}
        startIcon="GitHub"
      >
        GitHub
      </AuthButton>
    </div>
  )
}
