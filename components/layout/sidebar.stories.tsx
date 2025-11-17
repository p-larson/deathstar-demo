import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { Sidebar } from "./sidebar";
import { NavItem } from "./nav-item";
import { Icon } from "@/components/ui/icon";
import { Home, Search, Bell, Mail, User } from "lucide-react-native";
import { Text } from "@/components/ui/text";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <Sidebar showOnMobile>
      <View className="px-4 space-y-1">
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
        <NavItem
          icon={<Icon as={Mail} size={24} />}
          label="Messages"
          onPress={() => {}}
        />
        <NavItem
          icon={<Icon as={User} size={24} />}
          label="Profile"
          onPress={() => {}}
        />
      </View>
    </Sidebar>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Sidebar showOnMobile>
      <View className="px-4 py-4 space-y-4">
        <Text variant="h4">Navigation</Text>
        <View className="space-y-1">
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
      </View>
    </Sidebar>
  ),
};

