import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { View } from "react-native";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Text } from "./text";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: function Render () { 
    const [value, setValue] = useState<"account" | "password">("account");

    return <Tabs value={value} onValueChange={(value) => setValue(value as "account" | "password")} style={{ width: 400 }}>
      <TabsList>
        <TabsTrigger value="account">
          <Text>Account</Text>
        </TabsTrigger>
        <TabsTrigger value="password">
          <Text>Password</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <View style={{ padding: 16 }}>
          <Text>Make changes to your account here.</Text>
        </View>
      </TabsContent>
      <TabsContent value="password">
        <View style={{ padding: 16 }}>
          <Text>Change your password here.</Text>
        </View>
      </TabsContent>
    </Tabs>
  }
};

