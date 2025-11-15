import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronDown } from "lucide-react-native";
import { useState } from "react";
import { Pressable, View } from "react-native";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { Icon } from "./icon";
import { Text } from "./text";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Playground: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="w-full max-w-md"
      >
        <CollapsibleTrigger asChild>
          <Pressable className="flex-row items-center justify-between">
            <Text variant="h4">@peduarte starred 3 repositories</Text>
            <Icon as={ChevronDown} className={open ? "rotate-180" : ""} />
          </Pressable>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <View className="gap-2 pt-2">
            <Text>@radix-ui/primitives</Text>
            <Text>@radix-ui/colors</Text>
            <Text>@stitches/react</Text>
          </View>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
