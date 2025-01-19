import type { StyleProp, ViewStyle } from "react-native";

export type CenterPoint = readonly [x: number, y: number];

export type NativeConicGradientViewProps = {
  colors: number[];
  locations?: number[];
  center?: CenterPoint;
  angle?: number;
  style?: StyleProp<ViewStyle>;
};
