import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Switch } from "./switch";
import { Label } from "./label";
import { Text } from "./text";
import { View } from "react-native";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: function Render() {
    const [enabled, setEnabled] = useState(false);
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Switch checked={enabled} onCheckedChange={setEnabled} />
        <Label onPress={() => setEnabled(!enabled)}>
          <Text>Airplane Mode</Text>
        </Label>
      </View>
    );
  },
};

export const Checked: Story = {
  render: () => <Switch checked />,
};

export const Disabled: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Switch disabled />
      <Switch disabled checked />
    </View>
  ),
};

