import { ConicGradientView } from "expo-conic-gradient";

import Group from "../components/Group";
import styles from "../components/styles";

/* conic-gradient(red 36deg, orange 36deg 170deg, yellow 170deg) */
export default () => {
  return (
    <Group name="Pie Chart">
      <ConicGradientView
        colors={["red", "red", "orange", "orange", "yellow"]}
        locations={[0, 0.1, 0.1, 0.4, 0.4]}
        style={styles.exampleView}
      />
    </Group>
  );
};
