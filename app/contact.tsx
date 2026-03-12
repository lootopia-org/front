import { Footer } from "@/components/footer";
import { useState } from "react";
import { Alert } from "react-native";
import {
    Button,
    Input,
    ScrollView,
    Spinner,
    Text,
    TextArea,
    YStack,
} from "tamagui";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Alert.alert("Merci !", "Votre message a bien été envoyé.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      flex={1}
      backgroundColor="$background"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <YStack padding={20} gap={20} flex={1}>
        <Text fontSize={28} fontWeight="800" color="$accent">
          Contact
        </Text>

        <Text fontSize={15} lineHeight={24} color="$color">
          Une question, une suggestion ou un problème ? N&apos;hésitez pas à
          nous contacter via le formulaire ci-dessous.
        </Text>

        <YStack gap={16} marginTop={10}>
          <YStack gap={6}>
            <Text fontSize={14} fontWeight="600" color="$accent">
              Nom
            </Text>
            <Input
              borderWidth={1}
              borderColor="$border"
              borderRadius={6}
              paddingHorizontal={12}
              paddingVertical={8}
              fontSize={14}
              placeholder="Votre nom"
              placeholderTextColor="$border"
              value={name}
              onChangeText={setName}
              disabled={loading}
            />
          </YStack>

          <YStack gap={6}>
            <Text fontSize={14} fontWeight="600" color="$accent">
              Email
            </Text>
            <Input
              borderWidth={1}
              borderColor="$border"
              borderRadius={6}
              paddingHorizontal={12}
              paddingVertical={8}
              fontSize={14}
              placeholder="votre@email.com"
              placeholderTextColor="$border"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              disabled={loading}
            />
          </YStack>

          <YStack gap={6}>
            <Text fontSize={14} fontWeight="600" color="$accent">
              Message
            </Text>
            <TextArea
              borderWidth={1}
              borderColor="$border"
              borderRadius={6}
              paddingHorizontal={12}
              paddingVertical={8}
              fontSize={14}
              placeholder="Votre message..."
              placeholderTextColor="$border"
              value={message}
              onChangeText={setMessage}
              numberOfLines={5}
              disabled={loading}
            />
          </YStack>

          <Button
            backgroundColor="$accent"
            marginTop={10}
            paddingVertical={14}
            borderRadius={8}
            alignItems="center"
            justifyContent="center"
            disabled={loading}
            opacity={loading ? 0.6 : 1}
            pressStyle={{ opacity: 0.7 }}
            onPress={handleSubmit}
          >
            {loading ? (
              <Spinner color="#fff" />
            ) : (
              <Text color="#fff" fontSize={18} fontWeight="700">
                Envoyer
              </Text>
            )}
          </Button>
        </YStack>
      </YStack>
      <Footer />
    </ScrollView>
  );
}
