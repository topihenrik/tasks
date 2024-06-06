import {StoryObj, Meta} from "@storybook/react";
import AuthButton from "./AuthButton";

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
        <AuthButton startIcon="GitHub">GitHub</AuthButton>
        <AuthButton startIcon="Google">Google</AuthButton>
      </div>
    )
  }
}

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4 bg-gray-100 w-[400px] p-8">
        <AuthButton isDisabled={true} startIcon="GitHub">GitHub</AuthButton>
        <AuthButton isDisabled={true} startIcon="Google">Google</AuthButton>
      </div>
    )
  }
}

export const Loading: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4 bg-gray-100 w-[400px] p-8">
        <AuthButton isLoading={true} startIcon="GitHub">GitHub</AuthButton>
        <AuthButton isLoading={true} startIcon="Google">Google</AuthButton>
      </div>
    )
  }
}
