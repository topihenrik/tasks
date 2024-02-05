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

interface HeadingProps extends JSX.IntrinsicElements.h1 {
  /**
   * Level of the heading
   */
  level?: number;
}

export default function Heading({level = 1, ...props}: HeadingProps) {
  const {children, className} = props;
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