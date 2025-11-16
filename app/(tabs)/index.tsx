import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { ScrollView, View } from "react-native";

export default function Home() {
  return (
    <ScrollView>
      <Card>
        <CardHeader>
          <CardTitle>
            <Text variant="h3">
              Rent
            </Text>
          </CardTitle>
          <CardDescription>
            <Text variant="blockquote">
              Submitted payments of $1,234.56 pending
            </Text>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-row space-x-2">
          <Text variant="large" className="flex flex-1">
            $0.00
          </Text>
          <View className="flex-row gap-x-2">
            <Link href="/menu" asChild>
              <Link.Trigger>
                <Button size="lg">
                  <Text>Pay Now</Text>
                </Button>
              </Link.Trigger>
              <Link.Preview />
            </Link>

            <Link href="/" asChild>
              <Link.Trigger>
                <Button variant="secondary" size="lg">
                  <Text>Ledger</Text>
                </Button>
              </Link.Trigger>
              <Link.Preview />
            </Link>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
}
