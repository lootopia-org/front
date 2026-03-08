import { StyleSheet } from "react-native";

export const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    marginVertical: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#8B4513",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#A0522D",
    fontStyle: "italic",
  },
  form: {
    marginVertical: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#8B4513",
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: "#DC2626",
    borderWidth: 2,
  },
  errorText: {
    color: "#DC2626",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#8B4513",
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
  },
  loginLink: {
    color: "#8B4513",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
