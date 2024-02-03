import React, {ReactNode} from "react";
import {Button as ReactAriaButton} from "react-aria-components";
import { tv } from 'tailwind-variants';
import Icon from "../Icon/Icon";
import Spinner from "../Icon/Spinner.tsx";

const button = tv({
  base: [
    "flex justify-center gap-3 items-center font-bold capitalize py-2 px-4 rounded subpixel-antialiased select-none",
    "hover:shadow-md active:opacity-90 pressed:scale-[1.01] transition-transform"
  ],
  variants: {
    color: {
      primary: [
        "bg-blue-600 text-white",
        "hover:bg-blue-800 focus:outline-blue-900"
      ],
      secondary: [
        "bg-white text-blue-800 border-solid border-2 border-blue-800",
        "hover:bg-gray-50 focus:outline-blue-900 active:bg-blue-50"
      ],
      success: [
        "bg-green-600 text-white",
        "hover:bg-green-800 focus:outline-green-900"
      ],
      warning: [
        "bg-yellow-500 text-white",
        "hover:bg-yellow-700 focus:outline-yellow-800"
      ],
      error: [
        "bg-red-600 text-white",
        "hover:bg-red-800 focus:outline-red-900"
      ],
    },
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

interface ButtonProps {
  children: ReactNode;
  color: "primary" | "secondary" | "success" | "warning" | "error";
  isDisabled?: boolean;
  isLoading?: boolean;
  startIcon?: string;
  endIcon?: string;
}

export default function Button({children, color, isDisabled, isLoading, startIcon, endIcon = ""}: ButtonProps) {
  return (
    <ReactAriaButton
      isDisabled={isDisabled}
      className={button({ color, disabled: isDisabled, loading: isLoading })}
    >
      {(startIcon && !isLoading) &&
          <Icon color={color} src={startIcon}/>
      }
      {isLoading &&
          <Spinner color={color}/>
      }
      {children}
      {endIcon &&
          <Icon color={color} src={endIcon}/>
      }
    </ReactAriaButton>
  )
}