import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pressable, Text as RNText, View } from "react-native";
import { Text, TextClassContext } from "./text";

const VARIANT_OPTIONS = [
  "default",
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "blockquote",
  "code",
  "lead",
  "large",
  "small",
  "muted",
] as const;

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    variant: "default",
    asChild: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANT_OPTIONS,
    },
    asChild: {
      control: "boolean",
    },
    className: {
      control: "text",
      description: "Tailwind / utility classes merged into the component",
    },
    children: {
      control: "text",
    },
    onPress: {
      action: "press",
      table: { category: "events" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    variant: "default",
  },
};

export const Headings: Story = {
  render: (args) => (
    <View style={{ gap: 12, width: 720, maxWidth: "90%" }}>
      <Text variant="h1">Heading 1 — Extra Bold</Text>
      <Text variant="h2">Heading 2 — Semibold</Text>
      <Text variant="h3">Heading 3 — Semibold</Text>
      <Text variant="h4">Heading 4 — Semibold</Text>
      <Text {...args} />
    </View>
  ),
  args: {
    children: "Reusable args text",
  },
};

export const BodyAndUtilities: Story = {
  render: () => (
    <View style={{ gap: 12, width: 720, maxWidth: "90%" }}>
      <Text variant="p">
        Paragraph — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer nec odio.
      </Text>
      <Text variant="lead">Lead — A larger, muted intro paragraph.</Text>
      <Text variant="large">Large — Emphasized body text.</Text>
      <Text variant="small">Small — Secondary label text.</Text>
      <Text variant="muted">Muted — De-emphasized caption text.</Text>
      <Text variant="blockquote">
        “Blockquote — Good design is as little design as possible.”
      </Text>
      <Text variant="code">{"const greet = (n: string) => `hi ${n}`"}</Text>
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 10, width: 720, maxWidth: "90%" }}>
      {VARIANT_OPTIONS.map((v) => (
        <View key={v} style={{ gap: 6 }}>
          <RNText style={{ fontWeight: "600" }}>{v}</RNText>
          <Text variant={v as any}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        </View>
      ))}
    </View>
  ),
};

export const WithCustomClasses: Story = {
  args: {
    children: "This text has extra utility classes merged in.",
    className: "uppercase tracking-widest",
    variant: "large",
  },
};

export const AsChildLink: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Text variant="p">
        Below is a <Text variant="code">Text</Text> rendered “as child” using a
        Pressable:
      </Text>

      <Text asChild variant="p" className="underline">
        <Pressable
          onPress={() => {
            /* action shown in Storybook actions panel */
          }}
        >
          <RNText accessibilityRole="link">Tap me (asChild)</RNText>
        </Pressable>
      </Text>
    </View>
  ),
};

export const WithTextClassContext: Story = {
  decorators: [
    (StoryFn) => (
      <TextClassContext.Provider value="text-destructive">
        <StoryFn />
      </TextClassContext.Provider>
    ),
  ],
  render: () => (
    <View style={{ gap: 12 }}>
      <Text variant="p">
        This paragraph inherits classes from{" "}
        <Text variant="code">TextClassContext</Text>.
      </Text>
      <Text variant="small">Small text also inherits the context class.</Text>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Wrap any subtree in `TextClassContext.Provider` to apply a shared className (e.g., a theme color) to all nested `Text` components.",
      },
    },
  },
};
