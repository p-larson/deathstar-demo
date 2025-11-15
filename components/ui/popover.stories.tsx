import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Text } from "./text";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Text>Open popover</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>This is the popover content.</Text>
        </PopoverContent>
      </Popover>
    );
  },
};

