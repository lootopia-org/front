import { Link, Tabs } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/lootopia.png")}
                style={{ width: 28, height: 28, marginRight: 8 }}
                resizeMode="contain"
              />
              <Text
                style={{ fontSize: 18, fontWeight: "800", color: "#8B4513" }}
              >
                Chasse au Trésor
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 12,
              }}
            >
              <Link href="/(tabs)/explore" asChild>
                <Pressable
                  style={{
                    backgroundColor: "#8B4513",
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 8,
                    marginRight: 8,
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "700" }}>
                    Explorer
                  </Text>
                </Pressable>
              </Link>
              <Link href="/signup" asChild>
                <Pressable
                  style={{
                    backgroundColor: "#A0522D",
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 8,
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "700" }}>
                    S&apos;inscrire
                  </Text>
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorer",
          headerTitle: "Explorer",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          headerTitle: "Mon profil",
        }}
      />
    </Tabs>
  );
}
