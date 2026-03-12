import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { treasureHeaderStyles as styles } from "./treasure-header.styles";

export function TreasureHeader() {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.decorativeTop} />

        <View style={styles.headerContent}>
          <Image
            source={require("@/assets/images/lootopia.png")}
            style={styles.treasureImage}
            resizeMode="contain"
          />

          <View style={styles.textContainer}>
            <ThemedText style={styles.title}>Chasse au Trésor</ThemedText>
            <ThemedText style={styles.subtitle}>
              Découvrez les richesses cachées
            </ThemedText>
          </View>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => router.push("../signup")}
            activeOpacity={0.7}
          >
            <ThemedText style={styles.signupButtonText}>
              S&apos;inscrire
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("../login")}
            activeOpacity={0.7}
          >
            <ThemedText style={styles.loginButtonText}>Se connecter</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.decorativeBottom} />
      </View>
    </ThemedView>
  );
}
