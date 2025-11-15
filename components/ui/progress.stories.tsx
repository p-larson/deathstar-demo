import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./progress";
import { View } from "react-native";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => <Progress value={33} style={{ width: 300 }} />,
};

export const Values: Story = {
  render: () => (
    <View style={{ gap: 16, width: 300 }}>
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </View>
  ),
};

