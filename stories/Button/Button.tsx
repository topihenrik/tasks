import React, {ReactNode} from "react";
import {Button as ReactAriaButton} from "react-aria-components";
import { tv } from 'tailwind-variants';

// TODO: investigate outline-none further
// TODO: investigate .visible:focus:not(:focus-visible)


const button = tv({
  base: "font-bold capitalize py-2 px-4 rounded hover:shadow-md active:opacity-90",
  variants: {
    color: {
      primary: "bg-blue-600 text-white hover:bg-blue-800 focus:outline-blue-900",
      secondary: "bg-white text-blue-800 border-solid border-2 border-blue-800 hover:bg-gray-50 focus:outline-blue-900 focus:outline active:bg-blue-50",
      success: "bg-green-600 text-white hover:bg-green-800 focus:outline-green-900",
      warning: "bg-yellow-500 text-white hover:bg-yellow-700 focus:outline-yellow-800",
      error: "bg-red-600 text-white hover:bg-red-800 focus:outline-red-900",
    },
    disabled: {
      true: "bg-gray-100 text-gray-500 opacity-50 border-solid border-2 border-gray-400 cursor-not-allowed hover:bg-gray-100 hover:shadow-none focus:outline-0 active:opacity-50"
    }
  }
})

interface ButtonProps {
  children: ReactNode;
  color: "primary" | "secondary" | "success" | "warning" | "error";
  isDisabled?: boolean;
}

export default function Button({children, color, isDisabled}: ButtonProps) {
  return (
    <ReactAriaButton
      className={button({ color, disabled: isDisabled })}
    >
      {children}
    </ReactAriaButton>
  )
}