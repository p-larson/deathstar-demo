import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { MainLayout } from "./main-layout";
import { Text } from "@/components/ui/text";

const meta: Meta<typeof MainLayout> = {
  title: "Layout/MainLayout",
  component: MainLayout,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  render: () => (
    <MainLayout>
      <View className="flex-1 items-center justify-center p-4">
        <Text variant="h3">Main Layout</Text>
        <Text variant="p" className="mt-4 text-center">
          This is the main layout container. It centers content on larger screens.
        </Text>
      </View>
    </MainLayout>
  ),
};

