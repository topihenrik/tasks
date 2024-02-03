import {tv} from 'tailwind-variants';
import SpinnerIcon from "../../public/icons/spinner.svg";

const icon = tv({
  slots: {
    wrapper: "h-6 w-6",
    svg: "",
  },
  variants: {
    color: {
      primary: {
        svg: "stroke-white"
      },
      secondary: {
        svg: "stroke-blue-800"
      },
      success: {
        svg: "stroke-white"
      },
      warning: {
        svg: "stroke-white"
      },
      error: {
        svg: "stroke-white"
      },
    },
  }
})

export default function Spinner({className, color}) {
  const {wrapper, svg} = icon({color});
  return (
    <div className={wrapper({class: className})}>
      <SpinnerIcon class={svg()} width="100%" height="100%"/>
    </div>
  )
}