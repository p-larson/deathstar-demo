import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { AspectRatio } from "./aspect-ratio";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Playground: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="w-full max-w-md">
      <View className="bg-muted flex h-full w-full items-center justify-center rounded-md">
        <View className="text-muted-foreground text-4xl">16:9</View>
      </View>
    </AspectRatio>
  ),
};
