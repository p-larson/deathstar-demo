import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { Button } from "./button";
import { Text } from "./text";
import { View } from "react-native";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen} style={{ width: 300 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text>@peduarte starred 3 repositories</Text>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" onPress={() => setOpen(!open)}>
              <Text>{open ? "Show less" : "Show more"}</Text>
            </Button>
          </CollapsibleTrigger>
        </View>
        <CollapsibleContent>
          <View style={{ padding: 16, backgroundColor: "#f0f0f0", borderRadius: 8, marginTop: 8 }}>
            <Text>@radix-ui/primitives</Text>
            <Text>@radix-ui/colors</Text>
            <Text>@stitches/react</Text>
          </View>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

