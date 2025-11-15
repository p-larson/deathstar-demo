import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { Text } from "./text";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  render: () => (
    <Button>
      <Text>Button</Text>
    </Button>
  ),
};
