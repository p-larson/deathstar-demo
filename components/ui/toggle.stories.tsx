import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold } from "lucide-react-native";
import { useState } from "react";
import { Text } from "./text";
import { Toggle, ToggleIcon } from "./toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: function Render() {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onPressedChange={setPressed}>
      <Text>Toggle</Text>
    </Toggle>
  }
};

export const WithIcon: Story = {
  render: function Render() {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onPressedChange={setPressed}>
      <ToggleIcon as={Bold} />
    </Toggle>
  }
};

export const Variants: Story = {
  render: function Render() {
    const [pressed, setPressed] = useState(false);

    return <>
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        <Text>Default</Text>
      </Toggle>
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        <Text>Outline</Text>
      </Toggle>
    </>
  }
};

