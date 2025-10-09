import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { lightTheme } from "./themes";

export const createGlobalStyles = (colors: typeof lightTheme.colors) =>
  StyleSheet.create({
    title_text: {
      fontFamily: "OpenSans_800ExtraBold",
      color: colors.mainText,
    },
    body_text: {
      fontFamily: "PTSans_400Regular",
      color: colors.mainText,
    },
    error_text: {
      fontFamily: "PTSans_400Regular",
      color: "red",
    },
    input_field: {
      backgroundColor: colors.bgLight,
      borderRadius: scale(30),
      paddingHorizontal: scale(15),
    },
    buttons: {
      alignItems: "center",
      paddingVertical: scale(8),
      borderRadius: scale(30),
      backgroundColor: colors.bgLight,
    },
    button_text: {
      color: colors.mainText,
      fontWeight: "bold",
    },
  });
