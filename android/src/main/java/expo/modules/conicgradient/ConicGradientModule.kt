package expo.modules.conicgradient

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class ConicGradientModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ConicGradient")

    View(ConicGradientView::class) {
      Prop("colors") { view: ConicGradientView, colors: IntArray ->
        view.setColors(colors)
      }

      Prop("center") { view: ConicGradientView, center: FloatArray ->
        view.setCenter(center)
      }

      Prop("angle") { view: ConicGradientView, angle: Float ->
        view.setAngle(angle)
      }

      OnViewDidUpdateProps { view: ConicGradientView ->
        view.invalidate()
      }
    }
  }
}
