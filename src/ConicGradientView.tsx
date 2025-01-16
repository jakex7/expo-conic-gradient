import { requireNativeView } from 'expo';
import * as React from 'react';

import { ConicGradientViewProps } from './ConicGradient.types';

const NativeView: React.ComponentType<ConicGradientViewProps> =
  requireNativeView('ConicGradient');

export default function ConicGradientView(props: ConicGradientViewProps) {
  return <NativeView {...props} />;
}
