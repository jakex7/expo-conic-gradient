import { registerWebModule, NativeModule } from 'expo';

import { ConicGradientModuleEvents } from './ConicGradient.types';

class ConicGradientModule extends NativeModule<ConicGradientModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ConicGradientModule);
