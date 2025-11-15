import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heart } from "lucide-react-native";
import { Icon } from "./icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Playground: Story = {
  render: () => <Icon as={Heart} size={24} />,
};
