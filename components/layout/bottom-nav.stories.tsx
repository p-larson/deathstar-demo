import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { BottomNav } from "./bottom-nav";
import { NavItem } from "./nav-item";
import { Icon } from "@/components/ui/icon";
import { Home, Search, Bell, Mail, User } from "lucide-react-native";
import { Text } from "@/components/ui/text";

const meta: Meta<typeof BottomNav> = {
  title: "Layout/BottomNav",
  component: BottomNav,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof BottomNav>;

export const Default: Story = {
  render: () => (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
        <Text variant="h4">Content Area</Text>
        <Text variant="p" className="mt-2 text-center">
          Bottom navigation appears at the bottom
        </Text>
      </View>
      <BottomNav>
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
      </BottomNav>
    </View>
  ),
};

