import {default as NextLink, LinkProps as NextLinkProps} from "next/link";
import { tv } from 'tailwind-variants';

const style = tv({
  base: "text-blue-600 hover:underline focus:outline-blue-600"
})

interface LinkProps extends NextLinkProps {
  /**
   * Text children of the component.
   */
  children: string;
  /**
   * Additional tailwind styles for the element.
   */
  className?: string;
}

export default function Link({
  children,
  className,
  ...props
}: LinkProps) {
  return (
    <NextLink legacyBehavior {...props}>
      <a className={style({class: className})}>
        {children}
      </a>
    </NextLink>
  )
}