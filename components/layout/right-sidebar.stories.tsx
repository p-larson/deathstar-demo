import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { RightSidebar } from "./right-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { TrendingUp, Users } from "lucide-react-native";

const meta: Meta<typeof RightSidebar> = {
  title: "Layout/RightSidebar",
  component: RightSidebar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof RightSidebar>;

export const Default: Story = {
  render: () => (
    <RightSidebar minSize="lg">
      <View className="space-y-4">
        <View>
          <Text variant="h4" className="mb-2">Trending</Text>
          <View className="space-y-2">
            <View>
              <Text variant="small" className="text-muted-foreground">
                Trending in Technology
              </Text>
              <Text variant="default" className="font-semibold">
                #ReactNative
              </Text>
            </View>
            <View>
              <Text variant="small" className="text-muted-foreground">
                Trending in Design
              </Text>
              <Text variant="default" className="font-semibold">
                #UIUX
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RightSidebar>
  ),
};

export const WithCards: Story = {
  render: () => (
    <RightSidebar minSize="lg">
      <View className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text variant="h4">Trending</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="space-y-2">
              <View>
                <Text variant="small" className="text-muted-foreground">
                  Trending in Technology
                </Text>
                <Text variant="default" className="font-semibold">
                  #ReactNative
                </Text>
              </View>
              <View>
                <Text variant="small" className="text-muted-foreground">
                  Trending in Design
                </Text>
                <Text variant="default" className="font-semibold">
                  #UIUX
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Text variant="h4">Who to Follow</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="space-y-3">
              <View className="flex-row items-center gap-3">
                <Icon as={Users} size={20} />
                <Text variant="default">Suggested User 1</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Icon as={Users} size={20} />
                <Text variant="default">Suggested User 2</Text>
              </View>
            </View>
          </CardContent>
        </Card>
      </View>
    </RightSidebar>
  ),
};

