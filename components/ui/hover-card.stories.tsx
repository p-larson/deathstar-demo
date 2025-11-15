import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Text } from "./text";
import { View } from "react-native";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger>
        <Text style={{ textDecorationLine: "underline" }}>@nextjs</Text>
      </HoverCardTrigger>
      <HoverCardContent>
        <View style={{ gap: 8 }}>
          <Text>The React Framework</Text>
          <Text style={{ fontSize: 12, opacity: 0.7 }}>
            Created by Vercel
          </Text>
        </View>
      </HoverCardContent>
    </HoverCard>
  ),
};

