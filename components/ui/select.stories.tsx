import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | undefined>();
    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full max-w-sm">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem label="Apple" value="apple" />
          <SelectItem label="Banana" value="banana" />
          <SelectItem label="Orange" value="orange" />
        </SelectContent>
      </Select>
    );
  },
};
