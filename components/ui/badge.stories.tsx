import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge";
import { Text } from "./text";

const meta = {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  render: () => (
    <Badge>
      <Text>Badge</Text>
    </Badge>
  ),
};
