import React, {ReactNode} from "react";
import {icons} from "lucide-react";
import {default as NextLink} from "next/link";
import {Icon} from "../Icon/Icon";
import {Button as ReactAriaButton} from "react-aria-components";
import {tv} from "tailwind-variants";


const style = tv({
  slots: {
    clickable: [
      "flex gap-4 p-2"
    ]
  }
})

interface ClickElementProps {
  type: 'a' | 'button';
  className?: string;
  children: ReactNode | string;
  icon: keyof typeof icons;
  href?: string;
}

export function ClickElement({children, className, icon, type, href = ""}: ClickElementProps) {
  const {clickable} = style();
  if (type === 'a') {
    return (
      <NextLink legacyBehavior href={href}>
        <a className={`${className} ${clickable()}`}>
          {(icon) &&
              <Icon name={icon}/>
          }
          {children}
        </a>
      </NextLink>
    )
  }

  return (
    <ReactAriaButton className={`${className} ${clickable()}`}>
      {(icon) &&
          <Icon name={icon}/>
      }
      {children}
    </ReactAriaButton>
  )
}
