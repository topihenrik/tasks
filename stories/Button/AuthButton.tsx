import Icon from "../Icon/Icon.tsx";
import Spinner from "../Icon/Spinner.tsx";
import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";
import {tv} from 'tailwind-variants';
import {MouseEvent} from "react";

const style = tv({
  base: [
    "flex justify-center gap-3 items-center font-bold capitalize py-3 px-4 rounded",
    "bg-white text-black border-solid border-2 border-neutral-600 subpixel-antialiased select-none",
    "hover:shadow-md focus:outline-blue-600 focus:outline-4 active:opacity-90 pressed:scale-[1.01] transition-transform",
  ]
})

interface AuthButtonProps extends ReactAriaButtonProps {
  /**
   * Shows whether the element is in loading state
   */
  isLoading?: boolean;
  /**
   * Deprecated prop which is transformed to onPress
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Icon at the start of the button container
   */
  startIcon?: string;
}

export default function AuthButton({isLoading, onClick, startIcon, ...props}: AuthButtonProps) {
  const {
    children,
    className,
    type,
    isDisabled
  } = props;

  return (
    <ReactAriaButton
      {...props}
      onPress={onClick}
      type={type}
      isDisabled={isDisabled}
      className={style({disabled: isDisabled, loading: isLoading, class: className})}
    >
      {(startIcon && !isLoading) &&
          <Icon src={startIcon}/>
      }
      {isLoading &&
          <Spinner/>
      }
      {children}
    </ReactAriaButton>
  )
}