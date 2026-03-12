import { Footer } from "@/components/footer";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import {
  Button,
  Form,
  Input,
  ScrollView,
  Spinner,
  Text,
  XStack,
  YStack,
} from "tamagui";

interface SignupFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
      flex={1}
      backgroundColor="$background"
      contentContainerStyle={{ padding: 20, alignItems: "center" }}
    >
      <YStack
        marginVertical={30}
        alignItems="center"
        width="100%"
        maxWidth={400}
      >
        <Text fontSize={32} fontWeight="800" color="$accent" marginBottom={8}>
          Créer un compte
        </Text>
        <Text fontSize={16} color="$muted" fontStyle="italic">
          Rejoignez l&apos;aventure Lootopia
        </Text>
      </YStack>

      <Form
        onSubmit={form.handleSubmit}
        marginVertical={20}
        width="100%"
        maxWidth={400}
      >
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
            <YStack marginBottom={20}>
              <Text
                fontSize={14}
                fontWeight="600"
                marginBottom={8}
                color="$accent"
              >
                Nom complet
              </Text>
              <Input
                borderWidth={1}
                borderRadius={6}
                paddingHorizontal={12}
                paddingVertical={8}
                fontSize={14}
                height={40}
                borderColor={
                  field.state.meta.errors.length > 0 ? "$danger" : "$border"
                }
                placeholder="Jean Dupont"
                placeholderTextColor="$border"
                value={field.state.value}
                onChangeText={field.handleChange}
                onBlur={field.handleBlur}
                disabled={loading}
              />
              {field.state.meta.errors.length > 0 && (
                <Text
                  fontSize={12}
                  color="$danger"
                  marginTop={4}
                  marginLeft={4}
                >
                  {field.state.meta.errors[0]}
                </Text>
              )}
            </YStack>
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
            <YStack marginBottom={20}>
              <Text
                fontSize={14}
                fontWeight="600"
                marginBottom={8}
                color="$accent"
              >
                Email
              </Text>
              <Input
                borderWidth={1}
                borderRadius={6}
                paddingHorizontal={12}
                paddingVertical={8}
                fontSize={14}
                height={40}
                borderColor={
                  field.state.meta.errors.length > 0 ? "$danger" : "$border"
                }
                placeholder="email@example.com"
                placeholderTextColor="$border"
                value={field.state.value}
                onChangeText={field.handleChange}
                onBlur={field.handleBlur}
                keyboardType="email-address"
                autoCapitalize="none"
                disabled={loading}
              />
              {field.state.meta.errors.length > 0 && (
                <Text
                  fontSize={12}
                  color="$danger"
                  marginTop={4}
                  marginLeft={4}
                >
                  {field.state.meta.errors[0]}
                </Text>
              )}
            </YStack>
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
            <YStack marginBottom={20}>
              <Text
                fontSize={14}
                fontWeight="600"
                marginBottom={8}
                color="$accent"
              >
                Mot de passe
              </Text>
              <Input
                borderWidth={1}
                borderRadius={6}
                paddingHorizontal={12}
                paddingVertical={8}
                fontSize={14}
                height={40}
                borderColor={
                  field.state.meta.errors.length > 0 ? "$danger" : "$border"
                }
                placeholder="Minimum 6 caractères"
                placeholderTextColor="$border"
                value={field.state.value}
                onChangeText={field.handleChange}
                onBlur={field.handleBlur}
                secureTextEntry
                disabled={loading}
              />
              {field.state.meta.errors.length > 0 && (
                <Text
                  fontSize={12}
                  color="$danger"
                  marginTop={4}
                  marginLeft={4}
                >
                  {field.state.meta.errors[0]}
                </Text>
              )}
            </YStack>
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
            <YStack marginBottom={20}>
              <Text
                fontSize={14}
                fontWeight="600"
                marginBottom={8}
                color="$accent"
              >
                Confirmer le mot de passe
              </Text>
              <Input
                borderWidth={1}
                borderRadius={6}
                paddingHorizontal={12}
                paddingVertical={8}
                fontSize={14}
                height={40}
                borderColor={
                  field.state.meta.errors.length > 0 ? "$danger" : "$border"
                }
                placeholder="Confirmez votre mot de passe"
                placeholderTextColor="$border"
                value={field.state.value}
                onChangeText={field.handleChange}
                onBlur={field.handleBlur}
                secureTextEntry
                disabled={loading}
              />
              {field.state.meta.errors.length > 0 && (
                <Text
                  fontSize={12}
                  color="$danger"
                  marginTop={4}
                  marginLeft={4}
                >
                  {field.state.meta.errors[0]}
                </Text>
              )}
            </YStack>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit]) => (
            <Form.Trigger asChild>
              <Button
                backgroundColor="$accent"
                marginTop={30}
                paddingVertical={14}
                borderRadius={8}
                alignItems="center"
                justifyContent="center"
                disabled={!canSubmit || loading}
                opacity={!canSubmit || loading ? 0.6 : 1}
                pressStyle={{ opacity: 0.7 }}
              >
                {loading ? (
                  <Spinner color="#fff" />
                ) : (
                  <Text color="#fff" fontSize={18} fontWeight="700">
                    S&apos;inscrire
                  </Text>
                )}
              </Button>
            </Form.Trigger>
          )}
        </form.Subscribe>

        <XStack justifyContent="center" marginTop={24} alignItems="center">
          <Text fontSize={14}>Vous avez déjà un compte? </Text>
          <Text
            fontSize={14}
            color="$accent"
            fontWeight="700"
            textDecorationLine="underline"
            onPress={() => router.push("/")}
          >
            Se connecter
          </Text>
        </XStack>
      </Form>

      <Footer />
    </ScrollView>
  );
}
