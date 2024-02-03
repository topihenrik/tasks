import {tv} from 'tailwind-variants';

const icon = tv({
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

export default function Icon({className, color, src: SvgIcon}) {
  const {wrapper, svg} = icon({color});
  return (
    <div className={wrapper({class: className})}>
      <SvgIcon class={svg()} width="100%" height="100%" viewBox="0 0 512 512"/>
    </div>
  )
}