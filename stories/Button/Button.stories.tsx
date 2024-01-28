import Button from "./Button.tsx";
import {Meta} from "@storybook/blocks";
import {StoryObj} from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    color: 'primary'
  }
}

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
      </div>
    )
  }
}

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <Button color="primary" isDisabled={true}>Primary</Button>
        <Button color="secondary" isDisabled={true}>Secondary</Button>
        <Button color="success" isDisabled={true}>Success</Button>
        <Button color="warning" isDisabled={true}>Warning</Button>
        <Button color="error" isDisabled={true}>Error</Button>
      </div>
    )
  }
}