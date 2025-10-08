import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { lightTheme } from "./themes";

export const createGlobalStyles = (colors: typeof lightTheme.colors) =>
  StyleSheet.create({
    title_text: {
      fontFamily: "OpenSans_800ExtraBold",
    },
    body_text: {
      fontFamily: "PTSans_400Regular",
    },
    input_fields: {
      backgroundColor: colors.bgLight,
      borderRadius: scale(30),
      paddingHorizontal: scale(15),
    },
  });
