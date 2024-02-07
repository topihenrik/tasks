import {FC, SVGProps} from "react";
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

interface IconProps {
  /**
   * The source location of the SVG file
   */
  src: FC<SVGProps<SVGSVGElement>> | string;
  /**
   * Dictates the color scheme of the element
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Additional tailwind styles for the element.
   */
  className?: string;
}

export default function Icon({
  className,
  src: SvgIcon,
  color,
}: IconProps) {
  const {wrapper, svg} = style();
  return (
    <div className={wrapper({class: className})}>
      <SvgIcon className={svg({color})} width="100%" height="100%" viewBox="0 0 512 512"/>
    </div>
  )
}