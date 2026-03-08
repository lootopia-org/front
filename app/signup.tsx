import { useForm } from "@tanstack/react-form";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { signupStyles as styles } from "./signup.styles";

interface SignupFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    } as SignupFormValues,
    onSubmit: async ({ value }) => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        Alert.alert("Succès", "Compte créé avec succès!", [
          {
            text: "OK",
            onPress: () => router.push("/"),
          },
        ]);
      } catch (error) {
        Alert.alert("Erreur", "Une erreur est survenue lors de l'inscription");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <ScrollView
      style={[styles.container, { backgroundColor }]}
      contentContainerStyle={styles.contentContainer}
    >
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Créer un compte</ThemedText>
        <ThemedText style={styles.subtitle}>
          Rejoignez l'aventure Lootopia
        </ThemedText>
      </ThemedView>

      <View style={styles.form}>
        <form.Field
          name="fullName"
          validators={{
            onChange: ({ value }) => {
              if (!value) return "Le nom complet est requis";
              if (value.length < 3)
                return "Le nom doit contenir au moins 3 caractères";
              return undefined;
            },
          }}
        >
          {(field) => (
            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Nom complet</ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { color: textColor, borderColor: textColor },
                  field.state.meta.errors.length > 0 && styles.inputError,
                ]}
                placeholder="Jean Dupont"
                placeholderTextColor={useThemeColor({}, "icon")}
                value={field.state.value}
                onChangeText={field.handleChange}
                onBlur={field.handleBlur}
                editable={!loading}
              />
              {field.state.meta.errors.length > 0 && (
                <ThemedText style={styles.errorText}>
                  {field.state.meta.errors[0]}
                </ThemedText>
              )}
            </View>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value) return "L'email est requis";
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                return "Email invalide";
              return undefined;
            },
          }}
        >
          {(field) => (
            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Email</ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { color: textColor, borderColor: textColor },
                  field.state.meta.errors.length > 0 && styles.inputError,
                ]}
                placeholder="email@example.com"
                placeholderTextColor={useThemeColor({}, "icon")}
                value={field.state.value}
                onChangeText={field.handleChange}
                onBlur={field.handleBlur}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!loading}
              />
              {field.state.meta.errors.length > 0 && (
                <ThemedText style={styles.errorText}>
                  {field.state.meta.errors[0]}
                </ThemedText>
              )}
            </View>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) => {
              if (!value) return "Le mot de passe est requis";
              if (value.length < 6)
                return "Le mot de passe doit contenir au moins 6 caractères";
              return undefined;
            },
          }}
        >
          {(field) => (
            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>Mot de passe</ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { color: textColor, borderColor: textColor },
                  field.state.meta.errors.length > 0 && styles.inputError,
                ]}
                placeholder="Minimum 6 caractères"
                placeholderTextColor={useThemeColor({}, "icon")}
                value={field.state.value}
                onChangeText={field.handleChange}
                onBlur={field.handleBlur}
                secureTextEntry
                editable={!loading}
              />
              {field.state.meta.errors.length > 0 && (
                <ThemedText style={styles.errorText}>
                  {field.state.meta.errors[0]}
                </ThemedText>
              )}
            </View>
          )}
        </form.Field>

        <form.Field
          name="confirmPassword"
          validators={{
            onChangeListenTo: ["password"],
            onChange: ({ value, fieldApi }) => {
              if (!value) return "La confirmation du mot de passe est requise";
              const password = fieldApi.form.getFieldValue("password");
              if (value !== password)
                return "Les mots de passe ne correspondent pas";
              return undefined;
            },
          }}
        >
          {(field) => (
            <View style={styles.inputGroup}>
              <ThemedText style={styles.label}>
                Confirmer le mot de passe
              </ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { color: textColor, borderColor: textColor },
                  field.state.meta.errors.length > 0 && styles.inputError,
                ]}
                placeholder="Confirmez votre mot de passe"
                placeholderTextColor={useThemeColor({}, "icon")}
                value={field.state.value}
                onChangeText={field.handleChange}
                onBlur={field.handleBlur}
                secureTextEntry
                editable={!loading}
              />
              {field.state.meta.errors.length > 0 && (
                <ThemedText style={styles.errorText}>
                  {field.state.meta.errors[0]}
                </ThemedText>
              )}
            </View>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit]) => (
            <TouchableOpacity
              style={[
                styles.button,
                (!canSubmit || loading) && styles.buttonDisabled,
              ]}
              onPress={form.handleSubmit}
              disabled={!canSubmit || loading}
              activeOpacity={0.7}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <ThemedText style={styles.buttonText}>S'inscrire</ThemedText>
              )}
            </TouchableOpacity>
          )}
        </form.Subscribe>

        <View style={styles.footer}>
          <ThemedText style={styles.footerText}>
            Vous avez déjà un compte?{" "}
          </ThemedText>
          <TouchableOpacity onPress={() => router.push("/")}>
            <ThemedText style={styles.loginLink}>Se connecter</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
