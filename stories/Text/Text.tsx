import {JSX} from "react";

interface TextProps extends JSX.IntrinsicElements.span {}

export default function Text({...props}: TextProps) {
  const {children, className} = props;
  return (
    <span {...props} className={className}>
      {children}
    </span>
  )
}