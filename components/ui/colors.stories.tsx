import { THEME } from "@/lib/theme";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Badge } from "./badge";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Text } from "./text";

const meta: Meta = {
  title: "Design/Colors",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <View className="flex-row items-center gap-3 mb-3">
    <View
      className="w-[60px] h-[60px] rounded-lg border border-border"
      style={{ backgroundColor: value }}
    />
    <View className="flex-1">
      <Text variant="small" className="font-medium">{name}</Text>
      <Text variant="code" className="text-xs">{value}</Text>
    </View>
  </View>
);

export const Theme: Story = {
  render: () => (
    <View className="w-[750px] gap-6 flex-col md:flex-row">
      <Card className="flex-1 min-w-0">
        <CardHeader>
          <CardTitle>Light Theme</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.entries(THEME.light).map(([key, value]) => {
            if (key === "radius") return null;
            return <ColorSwatch key={key} name={key} value={value as string} />;
          })}
        </CardContent>
      </Card>

      <Card className="flex-1 min-w-0">
        <CardHeader>
          <CardTitle>Dark Theme</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.entries(THEME.dark).map(([key, value]) => {
            if (key === "radius") return null;
            return <ColorSwatch key={key} name={key} value={value as string} />;
          })}
        </CardContent>
      </Card>
    </View>
  ),
};

export const Semantic: Story = {
  render: () => (
    <View className="w-full max-w-[95%] gap-4 flex-col md:flex-row md:flex-wrap">
      <Card className="flex-1 md:flex-[1_1_30%] min-w-0">
        <CardHeader>
          <CardTitle>Primary</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row gap-2 flex-wrap mb-2">
            <Badge variant="default">
              <Text>Primary</Text>
            </Badge>
            <Badge variant="secondary">
              <Text>Primary Foreground</Text>
            </Badge>
          </View>
          <ColorSwatch name="primary" value={THEME.light.primary} />
          <ColorSwatch name="primaryForeground" value={THEME.light.primaryForeground} />
        </CardContent>
      </Card>

      <Card className="flex-1 md:flex-[1_1_30%] min-w-0">
        <CardHeader>
          <CardTitle>Secondary</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row gap-2 flex-wrap mb-2">
            <Badge variant="secondary">
              <Text>Secondary</Text>
            </Badge>
          </View>
          <ColorSwatch name="secondary" value={THEME.light.secondary} />
          <ColorSwatch name="secondaryForeground" value={THEME.light.secondaryForeground} />
        </CardContent>
      </Card>

      <Card className="flex-1 md:flex-[1_1_30%] min-w-0">
        <CardHeader>
          <CardTitle>Destructive</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="flex-row gap-2 flex-wrap mb-2">
            <Badge variant="destructive">
              <Text>Destructive</Text>
            </Badge>
          </View>
          <ColorSwatch name="destructive" value={THEME.light.destructive} />
        </CardContent>
      </Card>
    </View>
  ),
};

