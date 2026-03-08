import { StyleSheet } from "react-native";

export const treasureHeaderIosStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: "#8B4513",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  blur: {
    overflow: "hidden",
  },
  background: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "rgba(139, 69, 19, 0.08)",
  },
  decorativeTop: {
    height: 3,
    backgroundColor: "#D2B48C",
    borderRadius: 1.5,
    marginBottom: 14,
    opacity: 0.7,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  treasureImage: {
    width: 90,
    height: 90,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#8B4513",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#A0522D",
    fontStyle: "italic",
    opacity: 0.85,
  },
  decorativeBottom: {
    height: 2,
    backgroundColor: "#D2B48C",
    borderRadius: 1,
    marginTop: 14,
    opacity: 0.7,
  },
  signupButton: {
    backgroundColor: "#8B4513",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 10,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});
