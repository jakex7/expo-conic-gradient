import * as React from 'react';

import { ConicGradientViewProps } from './ConicGradient.types';

export default function ConicGradientView(props: ConicGradientViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
