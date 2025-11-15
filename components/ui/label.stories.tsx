import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";
import { Text } from "./text";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <Label>
      <Text>Label</Text>
    </Label>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Label disabled>
      <Text>Disabled Label</Text>
    </Label>
  ),
};

