import { ConicGradientView } from "expo-conic-gradient";

import Group from "../components/Group";
import styles from "../components/styles";

/* conic-gradient(from 0.25turn at 50% 30%, #f69d3c, 10deg, #3f87a6, 350deg, #ebf8e1) */
export default () => {
  return (
    <Group name="Offset center">
      <ConicGradientView
        colors={["#f69d3c", "#3f87a6", "#ebf8e1"]}
        center={[0.6, 0.3]}
        angle={90}
        style={styles.exampleView}
      />
    </Group>
  );
};
