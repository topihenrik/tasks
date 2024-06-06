import Spinner from "../Icon/Spinner";
import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";
import {tv} from 'tailwind-variants';
import {ReactNode} from "react";
import GitHubLogo from "../../public/icons/logo-github.svg";
import GoogleLogo from "../../public/icons/logo-google.svg";

const style = tv({
  base: [
    "flex justify-center gap-3 items-center font-bold capitalize py-3 px-4 rounded",
    "bg-white text-black border-solid border-2 border-neutral-600 subpixel-antialiased select-none",
    "hover:shadow-md focus:outline-blue-600 focus:outline-4 active:opacity-90 pressed:scale-[1.01] transition-transform",
  ],
  variants: {
    disabled: {
      true: [
        "bg-gray-100 text-gray-500 opacity-50 border-solid border-2 border-gray-400",
        "hover:bg-gray-100 hover:shadow-none focus:outline-0 active:opacity-50"
      ]
    },
    loading: {
      true: [
        "opacity-50 hover:bg-current pointer-events-none"
      ]
    }
  }
})

interface AuthButtonProps extends ReactAriaButtonProps {
  /**
   * Text children of the component.
   */
  children: ReactNode | string;
  /**
   * Additional tailwind styles for the element.
   */
  className?: string;
  /**
   * Shows whether the element is in loading state
   */
  isLoading?: boolean;
  /**
   * Icon at the start of the button container
   */
  startIcon?: "GitHub" | "Google";
}

function getAuthIcon(name: "GitHub" | "Google") {
  switch (name) {
    case "GitHub":
      return <GitHubLogo width="24px" height="24px" viewBox="0 0 512 512"/>
    case "Google":
      return <GoogleLogo width="24px" height="24px" viewBox="0 0 512 512"/>;
    default:
      return null;
  }
}

export default function AuthButton({
   children,
   className,
   type,
   isDisabled,
   isLoading,
   startIcon,
   ...props
}: AuthButtonProps) {
  return (
    <ReactAriaButton
      {...props}
      type={type}
      isDisabled={isDisabled}
      className={style({disabled: isDisabled, loading: isLoading, class: className})}
    >
      {(startIcon && !isLoading) &&
          getAuthIcon(startIcon)
      }
      {isLoading &&
          <Spinner/>
      }
      {children}
    </ReactAriaButton>
  )
}
