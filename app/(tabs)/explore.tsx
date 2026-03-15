import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

type UserCoords = {
  latitude: number;
  longitude: number;
};

function buildOsmMapHtml(userCoords?: UserCoords) {
  const centerLat = userCoords?.latitude ?? 48.8566;
  const centerLng = userCoords?.longitude ?? 2.3522;
  const hasUserLocation = Boolean(userCoords);

  return `
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
      const map = L.map('map', { zoomControl: true }).setView([${centerLat}, ${centerLng}], ${
        hasUserLocation ? 15 : 13
      });

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

      ${
        hasUserLocation
          ? `
      const userIcon = L.divIcon({
        className: 'user-location-dot',
        html: '<div style="width:14px;height:14px;border-radius:50%;background:#22c55e;border:2px solid #ffffff;box-shadow:0 0 0 4px rgba(34,197,94,0.25);"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });
      L.marker([${centerLat}, ${centerLng}], { icon: userIcon }).addTo(map).bindPopup('Votre position');
      `
          : ""
      }
    </script>
  </body>
</html>
`;
}

export default function ExploreScreen() {
  const router = useRouter();
  const [userCoords, setUserCoords] = useState<UserCoords | undefined>(
    undefined,
  );
  const [locationStatus, setLocationStatus] = useState<string>(
    "Position non detectee",
  );
  const html = useMemo(() => buildOsmMapHtml(userCoords), [userCoords]);
  const isWeb = Platform.OS === "web";

  const requestUserLocation = useCallback(async () => {
    if (Platform.OS === "web") {
      setLocationStatus("Sur web, la carte utilise une position par defaut.");
      return;
    }

    try {
      const permission = await Location.requestForegroundPermissionsAsync();
      if (permission.status !== "granted") {
        setLocationStatus(
          "Permission refusee. Active la localisation pour te geolocaliser.",
        );
        return;
      }

      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setUserCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLocationStatus("Position detectee et carte centree sur vous.");
    } catch {
      setLocationStatus("Impossible de recuperer votre position.");
    }
  }, []);

  useEffect(() => {
    requestUserLocation();
  }, [requestUserLocation]);

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
        <Text style={styles.geoStatus}>{locationStatus}</Text>
        {!isWeb && (
          <Text style={styles.geoAction} onPress={requestUserLocation}>
            Actualiser ma position
          </Text>
        )}
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
  geoStatus: {
    color: "#e2e8f0",
    marginTop: 8,
    fontSize: 12,
  },
  geoAction: {
    color: "#60a5fa",
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
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
