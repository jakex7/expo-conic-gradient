import { ConicGradientView } from "expo-conic-gradient";

import Group from "../components/Group";
import styles from "../components/styles";

/* conic-gradient(red, orange, yellow, green, blue) */
export default () => {
  return (
    <Group name="Simple">
      <ConicGradientView
        colors={["red", "orange", "yellow", "green", "blue"]}
        style={styles.exampleView}
      />
    </Group>
  );
};
