import {ElementType, ReactNode} from "react";
import { tv } from 'tailwind-variants';

const heading = tv({
  variants: {
    level: {
      1: "text-5xl",
      2: "text-4xl",
      3: "text-3xl",
      4: "text-2xl",
      5: "text-xl",
      6: "text-lg",
    }
  }
})

interface HeadingProps {
  children: ReactNode;
  className?: string;
  level: number;
}

export default function Heading({children, className, level}: HeadingProps) {
  let HeadingElement = `h${level}` as ElementType;
  return (
    <HeadingElement className={heading({level: level, class: className})}>
      {children}
    </HeadingElement>
  )
}