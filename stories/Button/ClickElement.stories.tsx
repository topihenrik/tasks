import {Meta, StoryObj} from "@storybook/react";
import {ClickElement} from "./ClickElement";

const meta: Meta<typeof ClickElement> = {
  component: ClickElement,
  title: 'ClickElement',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof ClickElement>;

export const Types: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <ClickElement type="button" icon="Home">
        Button
      </ClickElement>
      <ClickElement href="#" type="a" icon="Home">
        Anchor
      </ClickElement>
    </div>
  )
}
