import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "react-native";
import { MainLayout, Sidebar, MainContent, RightSidebar, BottomNav, NavItem } from "./index";
import { Icon } from "@/components/ui/icon";
import { Home, Search, Bell, Mail, User, TrendingUp, Users } from "lucide-react-native";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

const meta: Meta<typeof MainLayout> = {
  title: "Layout/Full Layout",
  component: MainLayout,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const CompleteLayout: Story = {
  render: () => (
    <>
      <MainLayout>
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

        <MainContent>
          <View className="p-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Text variant="h3">Welcome</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="p">
                  This is a complete Twitter/X-style layout with sidebar, main content, and right sidebar.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <Text variant="h4">Responsive Design</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="p">
                  The layout adapts based on screen size. Resize your browser to see the changes.
                </Text>
              </CardContent>
            </Card>
          </View>
        </MainContent>

        <RightSidebar minSize="lg">
          <View className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Text variant="h4">Trending</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <View className="space-y-2">
                  <View>
                    <Text variant="small" className="text-muted-foreground">
                      Trending in Technology
                    </Text>
                    <Text variant="default" className="font-semibold">
                      #ReactNative
                    </Text>
                  </View>
                  <View>
                    <Text variant="small" className="text-muted-foreground">
                      Trending in Design
                    </Text>
                    <Text variant="default" className="font-semibold">
                      #UIUX
                    </Text>
                  </View>
                </View>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <Text variant="h4">Who to Follow</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <View className="space-y-3">
                  <View className="flex-row items-center gap-3">
                    <Icon as={Users} size={20} />
                    <Text variant="default">Suggested User 1</Text>
                  </View>
                  <View className="flex-row items-center gap-3">
                    <Icon as={Users} size={20} />
                    <Text variant="default">Suggested User 2</Text>
                  </View>
                </View>
              </CardContent>
            </Card>
          </View>
        </RightSidebar>
      </MainLayout>

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
    </>
  ),
};

