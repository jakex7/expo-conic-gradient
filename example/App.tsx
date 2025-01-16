import { ConicGradientView } from "expo-conic-gradient";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Conic gradient</Text>
        {/* MDN Examples: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient */}
        {/* Some properties are not available yet */}
        {/* background: conic-gradient(red, orange, yellow, green, blue); */}
        <Group name="Example #1">
          <ConicGradientView
            colors={["red", "orange", "yellow", "green", "blue"]}
            style={styles.view}
          />
        </Group>
        {/* background: conic-gradient(from 0.25turn at 50% 30%, #f69d3c, 10deg, #3f87a6, 350deg, #ebf8e1); */}
        <Group name="Example #2">
          <ConicGradientView
            colors={["#f69d3c", "#3f87a6", "#ebf8e1"]}
            center={[0.6, 0.3]}
            angle={90}
            style={styles.view}
          />
        </Group>
        {/* background: conic-gradient(from 3.1416rad at 10% 50%, #e66465, #9198e5); */}
        <Group name="Example #3">
          <ConicGradientView
            colors={["#e66465", "#9198e5"]}
            center={[0.1, 0.5]}
            angle={180}
            style={styles.view}
          />
        </Group>
        {/* background: conic-gradient( 
              red 6deg, orange 6deg 18deg, yellow 18deg 45deg, 
              green 45deg 110deg, blue 110deg 200deg, purple 200deg); */}
        <Group name="Example #4">
          <ConicGradientView
            colors={["red", "orange", "yellow", "green", "blue", "purple"]}
            style={styles.view}
          />
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
};
