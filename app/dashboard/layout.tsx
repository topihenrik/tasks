import {ReactNode} from "react";
import SideNavigation from "@/app/ui/SideNavigation";
import TopNavigation from "@/app/ui/TopNavigation";
import {tv} from "tailwind-variants";
import {auth} from "@/app/lib/auth";
import {redirect} from "next/navigation";

const style = tv({
  slots: {
    container: "flex h-screen w-screen",
    main: "flex flex-col w-full"
  }
})


interface LayoutProps {
  children: ReactNode
}

export default async function Layout({children}: LayoutProps) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  const {container, main} = style();
  return (
    <div className={container()}>
      <SideNavigation/>
      <div className={main()}>
        <TopNavigation/>
        <div>{children}</div>
      </div>
    </div>
  )
}
