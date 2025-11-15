import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import { Text } from "./text";
import { View } from "react-native";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState("option-one");
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <RadioGroupItem value="option-one" />
          <Label onPress={() => setValue("option-one")}>
            <Text>Option One</Text>
          </Label>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <RadioGroupItem value="option-two" />
          <Label onPress={() => setValue("option-two")}>
            <Text>Option Two</Text>
          </Label>
        </View>
      </RadioGroup>
    );
  },
};

