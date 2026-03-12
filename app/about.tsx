import { Footer } from "@/components/footer";
import { ScrollView, Text, YStack } from "tamagui";

export default function AboutScreen() {
  return (
    <ScrollView
      flex={1}
      backgroundColor="$background"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <YStack padding={20} gap={20} flex={1}>
        <Text fontSize={28} fontWeight="800" color="$accent">
          À propos de Lootopia
        </Text>

        <Text fontSize={15} lineHeight={24} color="$color">
          Lootopia est une application de chasse au trésor qui vous permet de
          partir à l&apos;aventure et de découvrir des trésors cachés dans votre
          environnement.
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          Notre mission
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          Rendre l&apos;exploration ludique et accessible à tous. Que vous soyez
          en ville ou en pleine nature, Lootopia transforme chaque sortie en une
          aventure unique pleine de surprises et de découvertes.
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          Comment ça marche ?
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          Créez un compte, explorez la carte, suivez les indices et trouvez les
          trésors cachés par d&apos;autres utilisateurs. Vous pouvez également
          créer vos propres chasses au trésor et les partager avec la
          communauté.
        </Text>

        <Text fontSize={18} fontWeight="700" color="$accent" marginTop={10}>
          L&apos;équipe
        </Text>
        <Text fontSize={15} lineHeight={24} color="$color">
          Lootopia est développé par une équipe passionnée d&apos;aventuriers et
          de développeurs, dans le cadre d&apos;un projet d&apos;étude. Notre
          objectif est de créer une expérience immersive et amusante pour tous.
        </Text>
      </YStack>
      <Footer />
    </ScrollView>
  );
}
