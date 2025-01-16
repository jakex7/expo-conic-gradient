import type { StyleProp, ViewStyle } from "react-native";

export type CenterPoint = readonly [x: number, y: number];

export type NativeConicGradientViewProps = {
  colors: readonly number[];
  center?: CenterPoint;
  angle?: number;
  // startAngle?: number;
  // endAngle?: number;
  style?: StyleProp<ViewStyle>;
};
