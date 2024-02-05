import {Meta} from "@storybook/blocks";
import {StoryObj} from "@storybook/react";
import AuthButton from "./AuthButton.tsx";
import GitHubLogo from "../../public/icons/logo-github.svg";
import GoogleLogo from "../../public/icons/logo-google.svg";

const meta: Meta<typeof AuthButton> = {
  component: AuthButton,
  title: 'AuthButton',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof AuthButton>;

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4 bg-gray-100 w-[400px] p-8">
        <AuthButton startIcon={GitHubLogo}>GitHub</AuthButton>
        <AuthButton startIcon={GoogleLogo}>Google</AuthButton>
      </div>
    )
  }
}