import Button from "./Button";
import {StoryObj, Meta} from "@storybook/react";
import KeyIcon from '../../public/icons/key.svg';
import CaretForwardIcon from '../../public/icons/caret-forward.svg';
import ShieldCheckmarkIcon from "../../public/icons/shield-checkmark.svg";
import WarningIcon from "../../public/icons/warning.svg";
import AlertIcon from "../../public/icons/alert-circle.svg"
import Heading from "../Heading/Heading";

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
export const Icons: Story = {
  render: (args) => {
    return (
      <div className="grid grid-cols-3 gap-4 justify-items-center">
          <Button color="primary" startIcon={KeyIcon}>Button</Button>
          <Button color="primary" endIcon={CaretForwardIcon}>Button</Button>
          <Button color="primary" startIcon={KeyIcon} endIcon={CaretForwardIcon}>Button</Button>
          <Button color="secondary" startIcon={KeyIcon}>Button</Button>
          <Button color="secondary" endIcon={CaretForwardIcon}>Button</Button>
          <Button color="secondary" startIcon={KeyIcon} endIcon={CaretForwardIcon}>Button</Button>
          <Button color="success" startIcon={ShieldCheckmarkIcon}>Button</Button>
          <Button color="success" endIcon={CaretForwardIcon}>Button</Button>
          <Button color="success" startIcon={ShieldCheckmarkIcon} endIcon={CaretForwardIcon}>Button</Button>
          <Button color="warning" startIcon={WarningIcon}>Button</Button>
          <Button color="warning" endIcon={CaretForwardIcon}>Button</Button>
          <Button color="warning" startIcon={WarningIcon} endIcon={CaretForwardIcon}>Button</Button>
          <Button color="error" startIcon={AlertIcon}>Button</Button>
          <Button color="error" endIcon={CaretForwardIcon}>Button</Button>
          <Button color="error" startIcon={AlertIcon} endIcon={CaretForwardIcon}>Button</Button>
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

export const Loading: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Heading className="text-center" level={4}>Loading button</Heading>
          <div className="grid grid-cols-3 gap-4">
            <Button color="primary" isLoading={true}>Button</Button>
            <Button color="secondary" isLoading={true}>Button</Button>
            <Button color="success" isLoading={true}>Button</Button>
            <Button color="warning" isLoading={true}>Button</Button>
            <Button color="error" isLoading={true}>Button</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Heading className="text-center" level={4}>with starIcon and endIcon</Heading>
          <div className="grid grid-cols-3 gap-4">
            <Button color="primary" isLoading={true} startIcon={KeyIcon} endIcon={CaretForwardIcon}>Button</Button>
            <Button color="secondary" isLoading={true} startIcon={KeyIcon} endIcon={CaretForwardIcon}>Button</Button>
            <Button color="success" isLoading={true} startIcon={KeyIcon} endIcon={CaretForwardIcon}>Button</Button>
            <Button color="warning" isLoading={true} startIcon={KeyIcon} endIcon={CaretForwardIcon}>Button</Button>
            <Button color="error" isLoading={true} startIcon={KeyIcon} endIcon={CaretForwardIcon}>Button</Button>
          </div>
        </div>
      </div>
    )
  }
}