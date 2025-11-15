import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";
import { Text } from "./text";

const meta = {
  title: "Components/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Playground: Story = {
  render: () => (
    <Label>
      <Text>Email</Text>
    </Label>
  ),
};
