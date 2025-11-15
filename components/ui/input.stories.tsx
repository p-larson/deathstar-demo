import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  render: () => (
    <Input placeholder="Enter your email" className="w-full max-w-sm" />
  ),
};
