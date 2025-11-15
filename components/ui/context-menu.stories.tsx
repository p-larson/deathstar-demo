import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./context-menu";
import { Text } from "./text";

const meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Playground: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="border-border flex h-32 w-64 items-center justify-center rounded-md border">
        <Text>Right click here</Text>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Text>Back</Text>
        </ContextMenuItem>
        <ContextMenuItem>
          <Text>Forward</Text>
        </ContextMenuItem>
        <ContextMenuItem>
          <Text>Reload</Text>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
