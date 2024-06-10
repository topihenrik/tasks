"use client"
import {SideNav, SideNavItem} from "@/stories/SideNav/SideNav";
import {usePathname} from "next/navigation";

export default function SideNavigation() {
  const pathname = usePathname()
  const initialItems: SideNavItem[] = [
    {
      text: 'Home',
      icon: 'LayoutDashboard',
      route: '/dashboard/home',
    },
    {
      text: 'Tasks List',
      icon: 'Notebook',
      route: '/dashboard/tasks/list'
    },
    {
      text: 'Tasks Kanban',
      icon: 'Columns3',
      route: '/dashboard/tasks/kanban'
    }
  ];

  const items = initialItems.map((item) => {
    return {
      ...item,
      isActive: pathname.includes(item.route)
    }
  })

  return (
    <SideNav
      title='Tasks'
      items={items}
    />
  )
}
