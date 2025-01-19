import SwiftUI
import ExpoModulesCore

class ConicGradientProps: ExpoSwiftUI.ViewProps {
    @Field var colors: [Color] = []
    @Field var locations: [Double] = []
    @Field var center: UnitPoint = .center
    @Field var angle: Double = 0
}
