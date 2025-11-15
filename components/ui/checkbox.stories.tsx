import { cn } from "@/lib/utils";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
import { Text } from "./text";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <Label onPress={() => setChecked(!checked)}>
          <Text>Accept terms and conditions</Text>
        </Label>
      </View>
    );
  },
};

export const Checked: Story = {
  render: () => <Checkbox checked onCheckedChange={() => { }} disabled={false} />,
};

export const CardChecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const toggle = () => setChecked(!checked)

    return <TouchableOpacity onPress={toggle}>
      <Label
        htmlFor="checkbox"
        className={cn(
          'web:hover:bg-accent/50 border-border flex flex-row rounded-lg border p-3',
          checked &&
          'web:hover:bg-blue-50 border-blue-600 bg-blue-50 dark:border-blue-900 dark:bg-blue-950'
        )}>
        <View className="flex flex-1 flex-row items-start gap-3">
          <Checkbox
            id="checkbox"
            checked={checked}
            onCheckedChange={toggle}
            checkedClassName="border-blue-600 bg-blue-600 dark:border-blue-700"
            indicatorClassName="bg-blue-600 dark:bg-blue-700"
            iconClassName="text-white"
          />
          <View className="flex-1">
            <Text className="text-sm font-medium leading-none">Enable notifications</Text>
            <Text className="text-muted-foreground text-sm">
              You can enable or disable notifications at any time.
            </Text>
          </View>
        </View>
      </Label>
    </TouchableOpacity>
  }
  ,
};

export const Disabled: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Checkbox checked={false} disabled onCheckedChange={() => { }} />
      <Checkbox disabled checked onCheckedChange={() => { }} />
    </View>
  ),
};

