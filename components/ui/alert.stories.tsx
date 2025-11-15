import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlertCircle } from "lucide-react-native";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Text } from "./text";

const meta = {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  render: () => (
    <Alert icon={AlertCircle} className="w-full max-w-md">
      <AlertTitle>
        <Text>Heads up!</Text>
      </AlertTitle>
      <AlertDescription>
        <Text>You can add components to your app using the cli.</Text>
      </AlertDescription>
    </Alert>
  ),
};
