import { Component, ReactNode } from "react";
import { processColor, ViewProps } from "react-native";

import { CenterPoint } from "./NativeConicGradient.types";
import NativeConicGradientView from "./NativeConicGradientView";

type ConicGradientProps = ViewProps & {
  colors: readonly [string, string, ...string[]];
  center?: CenterPoint;
  angle?: number;
};

export default class ConicGradient extends Component<ConicGradientProps> {
  render(): ReactNode {
    const { colors, center, angle, ...props } = this.props;
    return (
      <NativeConicGradientView
        {...props}
        colors={colors.map(processColor) as readonly number[]}
        center={center}
        angle={angle}
      />
    );
  }
}
