import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { MainContent } from "./main-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

const meta: Meta<typeof MainContent> = {
  title: "Layout/MainContent",
  component: MainContent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MainContent>;

export const Default: Story = {
  render: () => (
    <MainContent>
      <View className="p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text variant="h3">Main Content</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text variant="p">
              This is the main content area. On mobile, it takes the full width.
              On larger screens, it's constrained to a readable width and centered.
            </Text>
          </CardContent>
        </Card>
      </View>
    </MainContent>
  ),
};

export const WithMultipleCards: Story = {
  render: () => (
    <MainContent>
      <View className="p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text variant="h4">Card 1</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text variant="p">Content for card 1</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Text variant="h4">Card 2</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text variant="p">Content for card 2</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Text variant="h4">Card 3</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text variant="p">Content for card 3</Text>
          </CardContent>
        </Card>
      </View>
    </MainContent>
  ),
};

