import { Footer } from "@/components/footer";
import { ScrollView, Text, YStack } from "tamagui";

export default function LegalScreen() {
  return (
    <ScrollView
      flex={1}
      backgroundColor="$background"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <YStack padding={20} gap={20} flex={1}>
        <Text fontSize={28} fontWeight="800" color="$accent">
          Mentions légales
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          Éditeur
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          Lootopia est un projet d&apos;étude développé dans un cadre
          pédagogique. L&apos;application est éditée à titre non commercial.
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          Hébergement
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          L&apos;application est hébergée par des services cloud standards. Les
          informations d&apos;hébergement détaillées sont disponibles sur
          demande.
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          Propriété intellectuelle
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          L&apos;ensemble des contenus présents sur l&apos;application Lootopia
          (textes, images, logos, icônes) sont protégés par le droit
          d&apos;auteur. Toute reproduction, même partielle, est interdite sans
          autorisation préalable.
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          Données personnelles
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          Les données collectées via l&apos;application sont utilisées
          uniquement dans le cadre du fonctionnement du service. Aucune donnée
          n&apos;est cédée à des tiers. Conformément au RGPD, vous disposez
          d&apos;un droit d&apos;accès, de rectification et de suppression de
          vos données. Pour exercer ce droit, contactez-nous via la page
          Contact.
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          Cookies
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          L&apos;application peut utiliser des cookies techniques nécessaires à
          son bon fonctionnement. Aucun cookie publicitaire ou de traçage
          n&apos;est utilisé.
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          Responsabilité
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          Lootopia s&apos;efforce d&apos;assurer l&apos;exactitude des
          informations diffusées, mais ne saurait être tenu responsable des
          erreurs, omissions ou résultats obtenus suite à l&apos;utilisation de
          ces informations.
        </Text>
      </YStack>
      <Footer />
    </ScrollView>
  );
}
