package expo.modules.conicgradient

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.SweepGradient
import android.util.Log
import androidx.core.graphics.transform
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

class ConicGradientView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  private var mCenter = floatArrayOf(0.5f, 0.5f)
  private var mColors: IntArray = intArrayOf(Color.TRANSPARENT, Color.TRANSPARENT)
  private var mAngle: Float = 0f
  private var paint = Paint(Paint.ANTI_ALIAS_FLAG)

  fun setColors(colors: IntArray) {
    mColors = colors
  }

  fun setCenter(center: FloatArray) {
    mCenter = center
  }

  fun setAngle(angle: Float) {
    mAngle = angle
  }

  private fun updateGradient() {
    val sweepGradient = SweepGradient(
      width * mCenter[0],
      height * mCenter[1],
      mColors,
      null
    )
    sweepGradient.transform {
      setRotate(
        mAngle - 90f,
        width * mCenter[0],
        height * mCenter[1]
      )
    }
    paint.shader = sweepGradient
  }

  override fun dispatchDraw(canvas: Canvas) {
    super.dispatchDraw(canvas)
    updateGradient()
    canvas.drawRect(0f, 0f, width.toFloat(), height.toFloat(), paint)
  }
}
