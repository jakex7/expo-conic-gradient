import ExpoModulesCore
import SwiftUI

struct ConicGradientView: ExpoSwiftUI.View {
  @EnvironmentObject var props: ConicGradientProps
    
    var body: some View {
        ZStack(alignment: .topLeading) {
            AnyView(
                AngularGradient(stops: createStops(), center: props.center, angle: Angle(degrees: props.angle - 90))
            )
        }
    }
    
    private func createStops() -> [Gradient.Stop] {
        var locations = props.locations
        if props.colors.count != props.locations.count {
            locations = Array(stride(from: 0.0, through: 1.0, by: 1.0 / Double(props.colors.count - 1) ))
        }
        return zip(props.colors, locations).map { (color, location) in
            return Gradient.Stop(color: color, location: location)
        }
    }
}
