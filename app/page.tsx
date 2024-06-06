import Heading from "@/stories/Heading/Heading";
import Text from "@/stories/Text/Text";
// import {getSession} from "next-auth";
import {auth} from "@/app/lib/auth";
import Logout from "@/app/ui/Logout";
import Link from "@/stories/Link/Link";

export default async function Home() {
  const session = await auth();
  return (
    <div className="w-96">
      <Heading level={1}>Hello World!</Heading>
      <div className="flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
      {session && (
          <div className="flex flex-col">
            <Text>Personal info: {session.user?.email}</Text>
            {JSON.stringify(session).split(",").map((item, i) => {
              return <Text key={i}>{item}</Text>;
            })}
            <Logout/>
          </div>
        )
      }
    </div>
  )
}