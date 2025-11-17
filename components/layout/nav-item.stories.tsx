import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { NavItem } from "./nav-item";
import { Icon } from "@/components/ui/icon";
import { Home, Search, Bell, Mail, User } from "lucide-react-native";

const meta: Meta<typeof NavItem> = {
  title: "Layout/NavItem",
  component: NavItem,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  render: () => (
    <View className="w-64 space-y-2">
      <NavItem
        icon={<Icon as={Home} size={24} />}
        label="Home"
        onPress={() => {}}
      />
      <NavItem
        icon={<Icon as={Search} size={24} />}
        label="Explore"
        onPress={() => {}}
      />
      <NavItem
        icon={<Icon as={Bell} size={24} />}
        label="Notifications"
        onPress={() => {}}
      />
    </View>
  ),
};

export const Active: Story = {
  render: () => (
    <View className="w-64 space-y-2">
      <NavItem
        icon={<Icon as={Home} size={24} />}
        label="Home"
        active
        onPress={() => {}}
      />
      <NavItem
        icon={<Icon as={Search} size={24} />}
        label="Explore"
        onPress={() => {}}
      />
      <NavItem
        icon={<Icon as={Bell} size={24} />}
        label="Notifications"
        onPress={() => {}}
      />
    </View>
  ),
};

export const WithoutLabels: Story = {
  render: () => (
    <View className="flex-row gap-2">
      <NavItem
        icon={<Icon as={Home} size={24} />}
        label="Home"
        active
        showLabel={false}
        onPress={() => {}}
      />
      <NavItem
        icon={<Icon as={Search} size={24} />}
        label="Explore"
        showLabel={false}
        onPress={() => {}}
      />
      <NavItem
        icon={<Icon as={Bell} size={24} />}
        label="Notifications"
        showLabel={false}
        onPress={() => {}}
      />
      <NavItem
        icon={<Icon as={Mail} size={24} />}
        label="Messages"
        showLabel={false}
        onPress={() => {}}
      />
      <NavItem
        icon={<Icon as={User} size={24} />}
        label="Profile"
        showLabel={false}
        onPress={() => {}}
      />
    </View>
  ),
};

