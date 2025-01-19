import ExpoModulesCore

public class ConicGradientModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ConicGradient")
        
        View(ConicGradientView.self)
    }
}
