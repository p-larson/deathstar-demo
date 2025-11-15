import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "./context-menu";
import { Text } from "./text";
import { View } from "react-native";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: "#f0f0f0",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Right click me</Text>
        </View>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>
          <Text>My Account</Text>
        </ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Text>Profile</Text>
        </ContextMenuItem>
        <ContextMenuItem>
          <Text>Settings</Text>
        </ContextMenuItem>
        <ContextMenuItem>
          <Text>Logout</Text>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

