import {ElementType, JSX} from "react";
import { tv } from 'tailwind-variants';

const style = tv({
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
  /**
   * Text children of the component.
   */
  children: string;
  /**
   * Additional tailwind styles for the element.
   */
  className?: string;
  /**
   * Level of the heading
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Heading({
  children,
  className,
  level = 1,
  ...props
}: HeadingProps) {
  let HeadingElement = `h${level}` as ElementType;
  return (
    <HeadingElement
      {...props}
      className={style({level: level, class: className})}
    >
      {children}
    </HeadingElement>
  )
}