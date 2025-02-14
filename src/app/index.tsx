import { Text, View } from "react-native";
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge"
import { GlobeIcon } from "@/components/ui/icon"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text className="text-lg">Edit app/index.tsx to edit this screen.</Text>

      <Badge size="md" variant="solid" action="success" className="flex-row items-center text-sm font-medium">
        <BadgeText className="text-lg">Verified</BadgeText>
      </Badge>

      <Badge size="md" variant="outline" action="error" className="flex-row items-center">
        <BadgeText>Error</BadgeText>
      </Badge>

      <Badge size="md" variant="solid" action="warning" className="flex-row items-center">
        <BadgeIcon as={GlobeIcon} className="mr-1" />
        <BadgeText>Warning</BadgeText>
      </Badge>
    </View>
  );
}
