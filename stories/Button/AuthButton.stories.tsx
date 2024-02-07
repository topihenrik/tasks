import {StoryObj, Meta} from "@storybook/react";
import AuthButton from "./AuthButton";
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

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4 bg-gray-100 w-[400px] p-8">
        <AuthButton isDisabled={true} startIcon={GitHubLogo}>GitHub</AuthButton>
        <AuthButton isDisabled={true} startIcon={GoogleLogo}>Google</AuthButton>
      </div>
    )
  }
}

export const Loading: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4 bg-gray-100 w-[400px] p-8">
        <AuthButton isLoading={true} startIcon={GitHubLogo}>GitHub</AuthButton>
        <AuthButton isLoading={true} startIcon={GoogleLogo}>Google</AuthButton>
      </div>
    )
  }
}