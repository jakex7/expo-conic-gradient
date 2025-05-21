import { ConicGradientView } from "expo-conic-gradient";
import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import Group from "../components/Group";
import styles from "../components/styles";

const AnimatedConicGradient =
  Animated.createAnimatedComponent(ConicGradientView);
export default () => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = withRepeat(
      withTiming(360, { duration: 5000, easing: Easing.linear }),
      -1,
      false,
    );
  }, [value]);

  const conic = useAnimatedProps(() => {
    return {
      angle: value.value,
    };
  });

  return (
    <Group name="Reanimated">
      <AnimatedConicGradient
        colors={["red", "orange", "yellow", "green", "blue", "purple", "red"]}
        animatedProps={conic}
        style={styles.exampleView}
      />
    </Group>
  );
};
