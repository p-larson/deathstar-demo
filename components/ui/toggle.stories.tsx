import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold } from "lucide-react-native";
import { Toggle, ToggleIcon } from "./toggle";
import { Text } from "./text";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {
  render: () => (
    <Toggle>
      <ToggleIcon as={Bold} />
      <Text>Bold</Text>
    </Toggle>
  ),
};

