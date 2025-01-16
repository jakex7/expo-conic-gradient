import SwiftUI
import ExpoModulesCore

class ConicGradientProps: ExpoSwiftUI.ViewProps {
  @Field var colors: [Color] = []
  @Field var center: UnitPoint = .center
  @Field var angle: Double = 0
//  @Field var startAngle: Double = 0
//  @Field var endAngle: Double = 360
}
