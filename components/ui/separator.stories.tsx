import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./separator";
import { View } from "react-native";
import { Text } from "./text";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <View style={{ width: 300 }}>
      <Text>Content above</Text>
      <Separator style={{ marginVertical: 16 }} />
      <Text>Content below</Text>
    </View>
  ),
};

export const Vertical: Story = {
  render: () => (
    <View style={{ flexDirection: "row", height: 100, alignItems: "center" }}>
      <Text>Left</Text>
      <Separator orientation="vertical" style={{ marginHorizontal: 16 }} />
      <Text>Right</Text>
    </View>
  ),
};

