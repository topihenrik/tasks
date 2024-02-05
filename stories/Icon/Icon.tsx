import {JSX} from "react";
import {tv} from 'tailwind-variants';

const style = tv({
  slots: {
    wrapper: "h-6 w-6",
    svg: "",
  },
  variants: {
    color: {
      primary: {
        svg: "fill-white"
      },
      secondary: {
        svg: "fill-blue-800"
      },
      success: {
        svg: "fill-white"
      },
      warning: {
        svg: "fill-white"
      },
      error: {
        svg: "fill-white"
      },
    },
  }
})

interface IconProps extends JSX.IntrinsicElements.svg {
  /**
   * The source location of the SVG file
   */
  src: string;
  /**
   * Dictates the color scheme of the element
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
}

export default function Icon({src: SvgIcon, color, ...props}: IconProps) {
  const {className} = props;
  const {wrapper, svg} = style({color});
  return (
    <div className={wrapper({class: className})}>
      <SvgIcon className={svg()} width="100%" height="100%" viewBox="0 0 512 512"/>
    </div>
  )
}