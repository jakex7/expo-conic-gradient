import ExpoModulesCore
// See https://docs.expo.dev/modules/module-api for more details about available components.

public class ConicGradientModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ConicGradient")

    View(ConicGradientView.self)
  }
}
