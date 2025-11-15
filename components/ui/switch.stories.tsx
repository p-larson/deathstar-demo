import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { View } from "react-native";
import { Label } from "./label";
import { Switch } from "./switch";
import { Text } from "./text";

const meta = {
  title: "Components/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return (
      <View className="flex-row items-center gap-2">
        <Switch checked={enabled} onCheckedChange={setEnabled} />
        <Label onPress={() => setEnabled(!enabled)}>
          <Text>Airplane Mode</Text>
        </Label>
      </View>
    );
  },
};
