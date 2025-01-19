import { ScrollView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import examples from "../examples";

export default () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={[
        { paddingTop: insets.top, paddingBottom: insets.bottom },
        styles.container,
      ]}
    >
      <Text style={styles.header}>Expo Conic Gradient</Text>
      {examples.map((Example, index) => (
        <Example key={index} />
      ))}
    </ScrollView>
  );
};

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
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
