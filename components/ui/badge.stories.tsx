import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Badge } from "./badge";
import { Text } from "./text";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Badge>
      <Text>Badge</Text>
    </Badge>
  ),
};

export const Variants: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
      <Badge variant="default">
        <Text>Default</Text>
      </Badge>
      <Badge variant="secondary">
        <Text>Secondary</Text>
      </Badge>
      <Badge variant="destructive">
        <Text>Destructive</Text>
      </Badge>
      <Badge variant="outline">
        <Text>Outline</Text>
      </Badge>
    </View>
  ),
};

