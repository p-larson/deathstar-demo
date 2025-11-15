import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { View } from "react-native";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
import { Text } from "./text";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <View className="flex-row items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <Label onPress={() => setChecked(!checked)}>
          <Text>Accept terms and conditions</Text>
        </Label>
      </View>
    );
  },
};
