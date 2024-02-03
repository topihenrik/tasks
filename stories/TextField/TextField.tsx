import React, {useEffect} from "react";
import {
  TextField as ReactAriaTextField,
  Label as ReactAriaLabel,
  Input as ReactAriaInput, Text, FieldError
} from "react-aria-components";
import {tv} from 'tailwind-variants';
import {useState} from "react";
import Icon from "../Icon/Icon";

const textField = tv({
  slots: {
    field: "flex flex-col relative gap-1",
    input: [
      "min-w-36 flex grow border-2 border-gray-500 rounded-md p-2 text-black",
      "focus:outline-blue-600 hover:border-gray-950",
      "data-[has-start-icon=true]:pl-10 data-[has-end-icon=true]:pr-10"
    ]
  },
  variants: {
    disabled: {
      true: {
        field: "text-gray-500 opacity-50",
        input: "border-gray-500 text-gray-500 hover:border-gray-500 cursor-not-allowed"
      }
    }
  }
})

interface TextFieldProps {
  value: string;
  placeholder: string;
  type: string;
  label: string;
  isDisabled?: boolean;
  errorText?: string;
  startIcon?: string;
  endIcon?: string;
}

export default function TextField({value, placeholder, type, label, isDisabled, text, errorText, startIcon, endIcon}: TextFieldProps) {
  const [innerValue, setInnerValue] = useState('');

  useEffect(() => {
    setInnerValue(value)
  }, [value])

  return (
    <ReactAriaTextField isDisabled={isDisabled} className={textField({disabled: isDisabled}).field} onChange={setInnerValue}>
      <ReactAriaLabel>{label}</ReactAriaLabel>
      <div className="relative flex items-center">
        {startIcon &&
            <Icon className="absolute left-2" src={startIcon}/>
        }
        <ReactAriaInput
          placeholder={placeholder}
          value={innerValue}
          type={type}
          className={textField({disabled: isDisabled}).input}
          data-has-start-icon={startIcon ? "true" : "false"}
          data-has-end-icon={endIcon ? "true" : "false"}
        />
        {endIcon &&
            <Icon className="absolute right-2" src={endIcon}/>
        }
      </div>
      <Text slot="errorMessage"/>
      <FieldError>{errorText}</FieldError>
    </ReactAriaTextField>
  )
}