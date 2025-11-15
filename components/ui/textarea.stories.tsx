import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";
import { View } from "react-native";
import { Label } from "./label";
import { Text } from "./text";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => (
    <Textarea placeholder="Type your message here." style={{ width: 300 }} />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <View style={{ gap: 8, width: 300 }}>
      <Label>
        <Text>Message</Text>
      </Label>
      <Textarea placeholder="Type your message here." />
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Textarea
      placeholder="Disabled textarea"
      editable={false}
      style={{ width: 300 }}
    />
  ),
};

