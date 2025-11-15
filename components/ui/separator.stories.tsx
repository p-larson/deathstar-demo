import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Separator } from "./separator";
import { Text } from "./text";

const meta = {
  title: "Components/Separator",
  component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Playground: Story = {
  render: () => (
    <View className="w-full max-w-md">
      <View className="gap-1">
        <Text variant="h4">Radix Primitives</Text>
        <Text variant="small">An open-source UI component library.</Text>
      </View>
      <Separator className="my-4" />
      <View className="gap-1">
        <Text variant="h4">Styling</Text>
        <Text variant="small">CSS-in-JS with support for Tailwind CSS.</Text>
      </View>
    </View>
  ),
};
