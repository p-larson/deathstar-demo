import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Italic, Underline } from "lucide-react-native";
import { useState } from "react";
import { Text } from "./text";
import { ToggleGroup, ToggleGroupIcon, ToggleGroupItem } from "./toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);

    return (
      <ToggleGroup value={value} onValueChange={setValue} variant="outline" type="multiple">
      <ToggleGroupItem isFirst value="bold" aria-label="Toggle bold">
        <ToggleGroupIcon as={Bold} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ToggleGroupIcon as={Italic} />
      </ToggleGroupItem>
      <ToggleGroupItem isLast value="strikethrough" aria-label="Toggle strikethrough">
        <ToggleGroupIcon as={Underline} />
      </ToggleGroupItem>
    </ToggleGroup>
    )
  }
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold">
        <Text>Bold</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Text>Italic</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Text>Underline</Text>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

