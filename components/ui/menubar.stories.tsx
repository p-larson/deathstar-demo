import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
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
})

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: () => (
    <View style={{ width: "100%", maxWidth: 600 }}>
      <Menubar value="file" onValueChange={() => {}}>
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
    </View>
  ),
};

