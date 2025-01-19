import { ConicGradientView } from "expo-conic-gradient";

import Group from "../components/Group";
import styles from "../components/styles";

/* conic-gradient(from 3.1416rad at 10% 50%, #e66465, #9198e5) */
export default () => {
  return (
    <Group name="Another offset center and angle">
      <ConicGradientView
        colors={["#e66465", "#9198e5"]}
        center={[0.1, 0.5]}
        angle={180}
        style={styles.exampleView}
      />
    </Group>
  );
};
