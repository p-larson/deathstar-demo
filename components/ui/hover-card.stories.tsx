import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Text } from "./text";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Playground: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Text className="underline">@nextjs</Text>
      </HoverCardTrigger>
      <HoverCardContent>
        <Text>The React Framework – created and maintained by @vercel.</Text>
      </HoverCardContent>
    </HoverCard>
  ),
};
