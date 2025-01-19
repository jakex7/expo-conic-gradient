import { Component, ReactNode } from "react";
import { processColor, ViewProps } from "react-native";

import {
  CenterPoint,
  NativeConicGradientViewProps,
} from "./NativeConicGradient.types";
import NativeConicGradientView from "./NativeConicGradientView";

type ConicGradientProps = ViewProps &
  Omit<NativeConicGradientViewProps, "colors"> & {
    colors: [string, string, ...string[]];
    center?: CenterPoint;
  };

export default class ConicGradient extends Component<ConicGradientProps> {
  render(): ReactNode {
    const { colors, locations, center, angle, ...props } = this.props;
    return (
      <NativeConicGradientView
        {...props}
        colors={colors.map(processColor) as number[]}
        locations={locations}
        center={center}
        angle={angle}
      />
    );
  }
}
