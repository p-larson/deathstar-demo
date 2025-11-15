import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Text } from "./text";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          <Text>Card Title</Text>
        </CardTitle>
        <CardDescription>
          <Text>Card Description</Text>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Card Content</Text>
      </CardContent>
      <CardFooter>
        <Button>
          <Text>Action</Text>
        </Button>
      </CardFooter>
    </Card>
  ),
};
