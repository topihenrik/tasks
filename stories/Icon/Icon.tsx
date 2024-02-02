import Image from "next/image";

export default function Icon({src, className}) {
  return (
      <Image
        className={className}
        alt="Icon"
        src={src}
        height={24}
        width={24}
      />
  )
}