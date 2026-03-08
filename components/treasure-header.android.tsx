import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image, StyleSheet, View } from "react-native";

export function TreasureHeader() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.background}>
        {/* Texture de parchemin/fond aventure - Android Material Design */}
        <View style={styles.decorativeTop} />

        <View style={styles.headerContent}>
          {/* Image du coffre au trésor */}
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
        </View>

        {/* Décoration du bas */}
        <View style={styles.decorativeBottom} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 4,
    borderBottomColor: "#8B4513",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 12,
  },
  background: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "rgba(139, 69, 19, 0.12)",
  },
  decorativeTop: {
    height: 4,
    backgroundColor: "#D2B48C",
    borderRadius: 2,
    marginBottom: 12,
    opacity: 0.65,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  treasureImage: {
    width: 85,
    height: 85,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#8B4513",
    marginBottom: 4,
    letterSpacing: 1.2,
  },
  subtitle: {
    fontSize: 14,
    color: "#A0522D",
    fontStyle: "italic",
    opacity: 0.8,
  },
  decorativeBottom: {
    height: 3,
    backgroundColor: "#D2B48C",
    borderRadius: 2,
    marginTop: 12,
    opacity: 0.65,
  },
});
