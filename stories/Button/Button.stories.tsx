import Button from "./Button.tsx";
import {Meta} from "@storybook/blocks";

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
    variant: 'primary'
  }
}

export const Variants = {
  render: (args) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
        <Button variant="primary" isDisabled={true}>Disabled</Button>
      </div>
    )
  }
}