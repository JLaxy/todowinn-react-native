import { PixelRatio } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const scaleFont = (size: number) => {
  const scaledSize = moderateScale(size, 0.3); // adjust factor for how strong scaling feels
  return scaledSize / PixelRatio.getFontScale(); // keeps accessibility scaling enabled
}; // Size that adapts to screen size and system font scaling

export { moderateScale, scale, verticalScale };
