import {LucideProps} from "lucide-react";
import { icons } from 'lucide-react';

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
};

