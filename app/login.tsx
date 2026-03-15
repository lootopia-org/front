import { Footer } from "@/components/footer";
import { loginUser, saveAuthToken } from "@/UtilsAuth/auth";
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

interface LoginFormValues {
  email: string;
  password: string;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  return "Une erreur est survenue lors de la connexion";
}

export default function LoginScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    onSubmit: async ({ value }) => {
      setLoading(true);
      try {
        const authResult = await loginUser(value);
        if (authResult.accessToken) {
          await saveAuthToken(authResult.accessToken);
        }

        Alert.alert("Succès", "Connexion réussie !", [
          {
            text: "OK",
            onPress: () => router.push("/(tabs)"),
          },
        ]);
      } catch (error) {
        Alert.alert("Erreur", getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <ScrollView
      flex={1}
      backgroundColor="$background"
      contentContainerStyle={{ padding: 20, flexGrow: 1, alignItems: "center" }}
    >
      <YStack
        marginVertical={30}
        alignItems="center"
        width="100%"
        maxWidth={400}
      >
        <Text fontSize={32} fontWeight="800" color="$accent" marginBottom={8}>
          Se connecter
        </Text>
        <Text fontSize={16} color="$muted" fontStyle="italic">
          Retrouvez vos trésors
        </Text>
      </YStack>

      <Form
        onSubmit={form.handleSubmit}
        marginVertical={20}
        width="100%"
        maxWidth={400}
        flex={1}
      >
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value) return "L&apos;email est requis";
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
                placeholder="Votre mot de passe"
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
                    Se connecter
                  </Text>
                )}
              </Button>
            </Form.Trigger>
          )}
        </form.Subscribe>

        <XStack justifyContent="center" marginTop={24} alignItems="center">
          <Text fontSize={14}>Pas encore de compte ? </Text>
          <Text
            fontSize={14}
            color="$accent"
            fontWeight="700"
            textDecorationLine="underline"
            onPress={() => router.push("/signup")}
          >
            S&apos;inscrire
          </Text>
        </XStack>
      </Form>

      <Footer />
    </ScrollView>
  );
}
