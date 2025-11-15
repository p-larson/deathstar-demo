import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Text } from "./text";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  render: function Render() {
    const [value, setValue] = useState("account");
    return (
      <Tabs value={value} onValueChange={setValue} className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">
            <Text>Account</Text>
          </TabsTrigger>
          <TabsTrigger value="password">
            <Text>Password</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Text>Make changes to your account here.</Text>
        </TabsContent>
        <TabsContent value="password">
          <Text>Change your password here.</Text>
        </TabsContent>
      </Tabs>
    );
  },
};
