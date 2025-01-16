import ExpoModulesCore
import SwiftUI

struct ConicGradientView: ExpoSwiftUI.View {
  @EnvironmentObject var props: ConicGradientProps
    
    var body: some View {
        ZStack(alignment: .topLeading) {
            AnyView(
                AngularGradient(
                    colors: props.colors,
                    center: props.center,
                    angle: Angle(degrees: props.angle - 90)
                )
            )
        }
    }
}
