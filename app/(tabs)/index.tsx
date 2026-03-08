import { ScrollView, StyleSheet } from "react-native";

import { TreasureHeader } from "@/components/treasure-header";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <TreasureHeader />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
