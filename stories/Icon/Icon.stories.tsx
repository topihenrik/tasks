import Icon from "./Icon.tsx";
import {Meta} from "@storybook/react";
import EmailFilled from '../../public/icons/mail.svg'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Icon',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    src: EmailFilled
  }
}