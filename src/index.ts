// Reexport the native module. On web, it will be resolved to ConicGradientModule.web.ts
// and on native platforms to ConicGradientModule.ts
export { default } from './ConicGradientModule';
export { default as ConicGradientView } from './ConicGradientView';
export * from  './ConicGradient.types';
