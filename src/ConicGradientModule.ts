import { NativeModule, requireNativeModule } from 'expo';

import { ConicGradientModuleEvents } from './ConicGradient.types';

declare class ConicGradientModule extends NativeModule<ConicGradientModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ConicGradientModule>('ConicGradient');
