import { Footer } from "@/components/footer";
import { getSession, signOutUser } from "@/UtilsAuth/auth";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button, ScrollView, Spinner, Text, YStack } from "tamagui";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  return "Impossible de se déconnecter";
}

export default function ProfileScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      try {
        const sessionData = await getSession();
        const connected = Boolean(sessionData);
        if (mounted) {
          setIsAuthenticated(connected);
          if (!connected) {
            router.replace("/login");
          }
        }
      } catch {
        if (mounted) {
          setIsAuthenticated(false);
          router.replace("/login");
        }
      } finally {
        if (mounted) {
          setCheckingSession(false);
        }
      }
    };

    checkSession();

    return () => {
      mounted = false;
    };
  }, [router]);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOutUser();
      router.replace("/login");
    } catch (error) {
      Alert.alert("Erreur", getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" />
        <Text marginTop={12}>Vérification de la session...</Text>
      </YStack>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <ScrollView
      flex={1}
      backgroundColor="$background"
      contentContainerStyle={{
        padding: 20,
        flexGrow: 1,
        justifyContent: "space-between",
      }}
    >
      <YStack gap={18}>
        <Text fontSize={30} fontWeight="800" color="$accent">
          Mon profil
        </Text>
        <Text fontSize={15} color="$muted">
          Gère ta session et ton compte Lootopia.
        </Text>

        <YStack
          borderWidth={1}
          borderColor="$border"
          borderRadius={10}
          padding={14}
          gap={6}
        >
          <Text fontSize={14} fontWeight="700" color="$accent">
            Statut
          </Text>
          <Text fontSize={14} color="$color">
            Connecté
          </Text>
        </YStack>

        <Button
          backgroundColor="$danger"
          marginTop={8}
          paddingVertical={14}
          borderRadius={8}
          alignItems="center"
          justifyContent="center"
          disabled={loading}
          opacity={loading ? 0.6 : 1}
          pressStyle={{ opacity: 0.7 }}
          onPress={handleLogout}
        >
          {loading ? (
            <Spinner color="#fff" />
          ) : (
            <Text color="#fff" fontSize={17} fontWeight="700">
              Se déconnecter
            </Text>
          )}
        </Button>
      </YStack>

      <Footer />
    </ScrollView>
  );
}
