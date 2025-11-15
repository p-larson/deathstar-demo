import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { View } from "react-native";
import { Label } from "./label";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Text } from "./text";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState("option-one");
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <View className="flex-row items-center gap-2">
          <RadioGroupItem value="option-one" />
          <Label onPress={() => setValue("option-one")}>
            <Text>Option One</Text>
          </Label>
        </View>
        <View className="flex-row items-center gap-2">
          <RadioGroupItem value="option-two" />
          <Label onPress={() => setValue("option-two")}>
            <Text>Option Two</Text>
          </Label>
        </View>
      </RadioGroup>
    );
  },
};
