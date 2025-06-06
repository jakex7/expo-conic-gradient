import { requireNativeView } from "expo";
import * as React from "react";

import { NativeConicGradientViewProps } from "./NativeConicGradient.types";

const NativeView: React.ComponentType<NativeConicGradientViewProps> =
  requireNativeView("ConicGradient");

export default function NativeConicGradientView(
  // eslint-disable-next-line
  props: NativeConicGradientViewProps
) {
  return <NativeView {...props} />;
}
