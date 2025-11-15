import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
  render: () => (
    <Textarea
      placeholder="Type your message here."
      className="w-full max-w-sm"
    />
  ),
};
