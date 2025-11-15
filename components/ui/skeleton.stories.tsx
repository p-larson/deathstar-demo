import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./skeleton";
import { View } from "react-native";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton style={{ width: 200, height: 20 }} />,
};

export const Shapes: Story = {
  render: () => (
    <View style={{ gap: 16, width: 300 }}>
      <Skeleton style={{ width: "100%", height: 20 }} />
      <Skeleton style={{ width: "75%", height: 20 }} />
      <Skeleton style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Skeleton style={{ width: "100%", height: 60 }} />
    </View>
  ),
};

