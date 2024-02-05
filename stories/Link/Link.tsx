import {default as NextLink, LinkProps as NextLinkProps} from "next/link";
import { tv } from 'tailwind-variants';

const style = tv({
  base: "text-blue-600 hover:underline focus:outline-blue-600"
})

interface LinkProps extends NextLinkProps {}

export default function Link({...props}: LinkProps) {
  const { children, className } = props;
  return (
    <NextLink legacyBehavior {...props}>
      <a className={style({class: className})}>
        {children}
      </a>
    </NextLink>
  )
}