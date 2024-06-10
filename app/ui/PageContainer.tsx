import Heading from "@/stories/Heading/Heading";
import Button from "@/stories/Button/Button";
import {ReactNode} from "react";

interface PageContainerProps {
  title: string;
  children: ReactNode;
}

export function PageContainer({title, children}: PageContainerProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center w-[768px]">
        <div className="flex justify-center p-8">
          <Heading level={3}>
            {title}
          </Heading>
        </div>
        <div className="flex flex-col p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
