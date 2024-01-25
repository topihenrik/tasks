import React from "react";
import {Button as ReactAriaButton} from "react-aria-components";
import clsx from "clsx";

export default function Button({children, variant, isDisabled, props}) {
  const tailwindStyles = clsx(
    "rounded py-2 px-4 font-bold capitalize",
    {
      "bg-blue-800 text-white hover:bg-blue-900 focus:outline-blue-900 hover:shadow-md": variant === 'primary' && !isDisabled,
      "bg-white text-blue-800 border-solid border-2 border-blue-800 hover:bg-gray-50 focus:outline-blue-900 focus:outline-double hover:shadow-md": variant === 'secondary' && !isDisabled,
      "text-green-800 border-solid border-2 border-green-800 hover:bg-gray-50 hover:shadow-md focus:outline-green-900 focus:outline-double": variant === 'success' && !isDisabled,
      "text-yellow-600 border-solid border-2 border-yellow-600 hover:bg-gray-50 hover:shadow-md focus:outline-yellow-700 focus:outline-double": variant === 'warning' && !isDisabled,
      "text-red-800 border-solid border-2 border-red-800 hover:bg-gray-50 hover:shadow-md focus:outline-red-900 focus:outline-double": variant === 'error' && !isDisabled,
      "bg-slate-100 text-slate-400 border-solid border-2 border-slate-400 outline-none cursor-not-allowed": isDisabled === true
    }
  );
  return (
    <ReactAriaButton
      className={tailwindStyles}
      {...props}
    >
      {children}
    </ReactAriaButton>
  )
}