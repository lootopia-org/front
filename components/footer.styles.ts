import { StyleSheet } from "react-native";

export const footerStyles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  content: {
    alignItems: "center",
    gap: 12,
  },
  linksRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  },
  link: {
    fontSize: 13,
    fontWeight: "600",
  },
  separator: {
    fontSize: 13,
  },
  copyright: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
});
