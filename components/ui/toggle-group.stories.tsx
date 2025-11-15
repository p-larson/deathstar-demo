import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Italic, Underline } from "lucide-react-native";
import { useState } from "react";
import { Text } from "./text";
import { ToggleIcon } from "./toggle";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Playground: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);
    return (
      <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="bold">
          <ToggleIcon as={Bold} />
          <Text>Bold</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <ToggleIcon as={Italic} />
          <Text>Italic</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <ToggleIcon as={Underline} />
          <Text>Underline</Text>
        </ToggleGroupItem>
      </ToggleGroup>
    );
  },
};
