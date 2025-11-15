import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { AspectRatio } from "./aspect-ratio";
import { Text } from "./text";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} style={{ width: 300 }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14, opacity: 0.7 }}>16:9 Aspect Ratio</Text>
      </View>
    </AspectRatio>
  ),
};

export const Square: Story = {
  render: () => (
    <AspectRatio ratio={1} style={{ width: 200 }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14, opacity: 0.7 }}>1:1 Square</Text>
      </View>
    </AspectRatio>
  ),
};

