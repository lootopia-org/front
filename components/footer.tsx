import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Text, XStack, YStack, useTheme } from "tamagui";
import { footerStyles as styles } from "./footer.styles";

export function Footer() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <YStack
      borderTopWidth={1}
      borderTopColor="$border"
      backgroundColor="$background"
      paddingVertical={16}
      paddingHorizontal={20}
    >
      <YStack style={styles.content}>
        <XStack style={styles.linksRow}>
          <Pressable onPress={() => router.push("/about")}>
            <Text style={[styles.link, { color: theme.accent.val }]}>
              À propos
            </Text>
          </Pressable>
          <Text style={[styles.separator, { color: theme.border.val }]}>•</Text>
          <Pressable onPress={() => router.push("/contact")}>
            <Text style={[styles.link, { color: theme.accent.val }]}>
              Contact
            </Text>
          </Pressable>
          <Text style={[styles.separator, { color: theme.border.val }]}>•</Text>
          <Pressable onPress={() => router.push("/legal")}>
            <Text style={[styles.link, { color: theme.accent.val }]}>
              Mentions légales
            </Text>
          </Pressable>
        </XStack>
        <Text style={[styles.copyright, { color: theme.muted.val }]}>
          © 2025 Lootopia — Tous droits réservés
        </Text>
      </YStack>
    </YStack>
  );
}
