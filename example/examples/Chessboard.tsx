import { ConicGradientView } from "expo-conic-gradient";

import Group from "../components/Group";
import styles from "../components/styles";

export default () => {
  return (
    <Group name="Chessboard">
      <ConicGradientView
        colors={["#fff", "#000", "#000", "#fff", "#fff", "#000"]}
        locations={[0.25, 0.25, 0.5, 0.5, 0.75, 0.75]}
        style={styles.exampleView}
      />
    </Group>
  );
};
