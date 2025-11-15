import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";
import { View } from "react-native";
import { Label } from "./label";
import { Text } from "./text";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input placeholder="Enter text..." />,
};

export const WithLabel: Story = {
  render: () => (
    <View style={{ gap: 8, width: 300 }}>
      <Label>
        <Text>Email</Text>
      </Label>
      <Input placeholder="name@example.com" />
    </View>
  ),
};

export const Disabled: Story = {
  render: () => <Input placeholder="Disabled input" editable={false} />,
};

