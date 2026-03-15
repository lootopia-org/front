import { useRouter } from "expo-router";
import { useMemo } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const osmMapHtml = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin=""
    />
    <style>
      html, body, #map { margin: 0; height: 100%; width: 100%; }
      body { background: #0f172a; }
      .leaflet-control-attribution { font-size: 10px; }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script
      src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      crossorigin=""
    ></script>
    <script>
      const map = L.map('map', { zoomControl: true }).setView([48.8566, 2.3522], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      const points = [
        { lat: 48.8584, lng: 2.2945, label: 'Point Loot: Tour Eiffel' },
        { lat: 48.8606, lng: 2.3376, label: 'Point Loot: Louvre' },
        { lat: 48.8738, lng: 2.2950, label: 'Point Loot: Arc de Triomphe' }
      ];

      points.forEach((p) => {
        L.marker([p.lat, p.lng]).addTo(map).bindPopup(p.label);
      });
    </script>
  </body>
</html>
`;

export default function ExploreScreen() {
  const router = useRouter();
  const html = useMemo(() => osmMapHtml, []);
  const isWeb = Platform.OS === "web";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backButton} onPress={() => router.push("/(tabs)")}>
          ← Retour a l&apos;accueil
        </Text>
        <Text style={styles.title}>Carte OpenStreetMap</Text>
        <Text style={styles.subtitle}>
          Carte non-Google avec points d&apos;interet Lootopia
        </Text>
      </View>
      <View style={styles.mapWrapper}>
        {isWeb ? (
          <iframe
            title="Lootopia OpenStreetMap"
            srcDoc={html}
            style={styles.webIframe as never}
          />
        ) : (
          <WebView
            originWhitelist={["*"]}
            source={{ html }}
            style={styles.map}
            javaScriptEnabled
            domStorageEnabled
            setSupportMultipleWindows={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 8,
  },
  backButton: {
    color: "#93c5fd",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  title: {
    color: "#f8fafc",
    fontSize: 22,
    fontWeight: "800",
  },
  subtitle: {
    color: "#cbd5e1",
    marginTop: 4,
    fontSize: 13,
  },
  mapWrapper: {
    flex: 1,
    margin: 12,
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#334155",
  },
  map: {
    flex: 1,
    backgroundColor: "transparent",
  },
  webIframe: {
    width: "100%",
    height: "100%",
    borderWidth: 0,
  },
});
