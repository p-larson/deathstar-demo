import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Text } from "./text";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar alt="Avatar with fallback">
      <AvatarFallback>
        <Text>PL</Text>
      </AvatarFallback>
    </Avatar>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Avatar alt="Avatar with image">
      <AvatarImage source={{ uri: "https://upload.wikimedia.org/wikipedia/en/f/f9/Death_star1.png" }} />
      <AvatarFallback>
        <Text>CN</Text>
      </AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
      <Avatar alt="Small avatar" style={{ width: 32, height: 32 }}>
        <AvatarFallback>
          <Text style={{ fontSize: 12 }}>S</Text>
        </AvatarFallback>
      </Avatar>
      <Avatar alt="Medium avatar">
        <AvatarFallback>
          <Text>M</Text>
        </AvatarFallback>
      </Avatar>
      <Avatar alt="Small avatar" style={{ width: 64, height: 64 }}>
        <AvatarFallback>
          <Text style={{ fontSize: 24 }}>L</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  ),
};

