import { BottomNav, MainContent, MainLayout, NavItem, RightSidebar, Sidebar } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Bell, Home, Mail, Search, User, Users } from 'lucide-react-native';
import { View } from 'react-native';

export function ExampleTwitterLayout() {
  return (
    <>
      <MainLayout>
        <Sidebar>
          <View className="px-4 space-y-1">
          <NavItem
            icon={<Icon as={Home} size={24} />}
            label="Home"
            active
            onPress={() => console.log('Home pressed')}
          />
          <NavItem
            icon={<Icon as={Search} size={24} />}
            label="Explore"
            onPress={() => console.log('Explore pressed')}
          />
          <NavItem
            icon={<Icon as={Bell} size={24} />}
            label="Notifications"
            onPress={() => console.log('Notifications pressed')}
          />
          <NavItem
            icon={<Icon as={Mail} size={24} />}
            label="Messages"
            onPress={() => console.log('Messages pressed')}
          />
          <NavItem
            icon={<Icon as={User} size={24} />}
            label="Profile"
            onPress={() => console.log('Profile pressed')}
          />
          </View>
        </Sidebar>

      <MainContent>
        <View className="p-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Text variant="h3">Welcome to Twitter/X Layout</Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="p">
                This is the main content area. On mobile, it takes the full width.
                On larger screens, it's constrained to a readable width and centered.
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
                The layout adapts based on screen size:
              </Text>
              <Text variant="p" className="mt-2">
                • Mobile: Bottom navigation, full-width content
              </Text>
              <Text variant="p">
                • Tablet: Left sidebar + main content
              </Text>
              <Text variant="p">
                • Desktop: Left sidebar + main content + right sidebar
              </Text>
            </CardContent>
          </Card>
        </View>
      </MainContent>

      <RightSidebar>
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
          onPress={() => console.log('Home pressed')}
        />
        <NavItem
          icon={<Icon as={Search} size={24} />}
          label="Explore"
          showLabel={false}
          onPress={() => console.log('Explore pressed')}
        />
        <NavItem
          icon={<Icon as={Bell} size={24} />}
          label="Notifications"
          showLabel={false}
          onPress={() => console.log('Notifications pressed')}
        />
        <NavItem
          icon={<Icon as={Mail} size={24} />}
          label="Messages"
          showLabel={false}
          onPress={() => console.log('Messages pressed')}
        />
        <NavItem
          icon={<Icon as={User} size={24} />}
          label="Profile"
          showLabel={false}
          onPress={() => console.log('Profile pressed')}
        />
      </BottomNav>
    </>
  );
}

