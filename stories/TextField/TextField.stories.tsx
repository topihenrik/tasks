import TextField from "./TextField.tsx";
import {Meta} from "@storybook/blocks";
import {StoryObj} from "@storybook/react";
import EmailIcon from '../../public/icons/mail.svg'
import CopyIcon from '../../public/icons/copy.svg'
import PersonIcon from '../../public/icons/person.svg'
import KeyIcon from '../../public/icons/key.svg'

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    placeholder: "First Name",
    label: "First Name"
  },
}

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="box-content flex flex-col gap-2 w-64">
        <TextField value="John" type="text" placeholder="First Name" label="First Name"/>
        <TextField value="Doe" type="text" placeholder="Last Name" label="Last Name"/>
        <TextField value="john.doe" type="text" placeholder="Username" label="Username" startIcon={PersonIcon} endIcon={CopyIcon}/>
        <TextField value="john.doe@mail.com" type="email" placeholder="Email" label="Email" startIcon={EmailIcon}/>
        <TextField value="password123" type="password" placeholder="Password" label="Password" startIcon={KeyIcon}/>
      </div>
    )
  }
}

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className="box-content flex flex-col gap-2 w-64">
        <TextField value="John" type="text" placeholder="First Name" label="First Name" isDisabled={true}/>
        <TextField value="Doe" type="text" placeholder="Last Name" label="Last Name" isDisabled={true}/>
        <TextField value="john.doe" type="text" placeholder="Username" label="Username" isDisabled={true} startIcon={PersonIcon} endIcon={CopyIcon}/>
        <TextField value="john.doe@mail.com" type="email" placeholder="Email" label="Email" isDisabled={true} startIcon={EmailIcon}/>
        <TextField value="password123" type="password" placeholder="Password" label="Password" isDisabled={true} startIcon={KeyIcon}/>
      </div>
    )
  }
}