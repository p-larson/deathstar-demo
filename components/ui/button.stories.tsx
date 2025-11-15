import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Button } from "./button";
import { Text } from "./text";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <Button>
      <Text>Button</Text>
    </Button>
  ),
};

export const Variants: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
      <Button variant="default">
        <Text>Default</Text>
      </Button>
      <Button variant="destructive">
        <Text>Destructive</Text>
      </Button>
      <Button variant="outline">
        <Text>Outline</Text>
      </Button>
      <Button variant="secondary">
        <Text>Secondary</Text>
      </Button>
      <Button variant="ghost">
        <Text>Ghost</Text>
      </Button>
      <Button variant="link">
        <Text>Link</Text>
      </Button>
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
      <Button size="sm">
        <Text>Small</Text>
      </Button>
      <Button size="default">
        <Text>Default</Text>
      </Button>
      <Button size="lg">
        <Text>Large</Text>
      </Button>
    </View>
  ),
};

