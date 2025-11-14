import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./menubar";
import { Text } from "./text";

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },
};

export default meta;

console.log({
  msg: "inspected imported components",
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
});

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | undefined>();
    return (
      <Menubar value={value} onValueChange={setValue}>
        <MenubarMenu value="file">
          <MenubarTrigger>
            <Text>File</Text>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Text>New Tab</Text>
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Text>New Window</Text>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Text>Share</Text>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Text>Print</Text>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};
