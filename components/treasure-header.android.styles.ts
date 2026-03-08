import { StyleSheet } from "react-native";

export const treasureHeaderAndroidStyles = StyleSheet.create({
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
  signupButton: {
    backgroundColor: "#8B4513",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 12,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
});
