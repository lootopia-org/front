import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image, StyleSheet, View } from "react-native";

export function TreasureHeader() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.background}>
        {/* Texture de parchemin/fond aventure - Web */}
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
    borderBottomWidth: 3,
    borderBottomColor: "#8B4513",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  background: {
    paddingVertical: 22,
    paddingHorizontal: 20,
    backgroundColor: "rgba(139, 69, 19, 0.08)",
  },
  decorativeTop: {
    height: 3,
    backgroundColor: "#D2B48C",
    borderRadius: 2,
    marginBottom: 13,
    opacity: 0.6,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  treasureImage: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#8B4513",
    marginBottom: 5,
    letterSpacing: 0.8,
  },
  subtitle: {
    fontSize: 15,
    color: "#A0522D",
    fontStyle: "italic",
    opacity: 0.82,
  },
  decorativeBottom: {
    height: 2,
    backgroundColor: "#D2B48C",
    borderRadius: 2,
    marginTop: 13,
    opacity: 0.6,
  },
});
