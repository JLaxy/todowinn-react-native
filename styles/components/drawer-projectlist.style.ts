import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { lightTheme } from "../themes";

export const createComponentStyle = (colors: typeof lightTheme.colors) =>
  StyleSheet.create({
    main_view: {
      padding: scale(30),
    },
    scroll_view: {
      backgroundColor: "red",
      marginVertical: verticalScale(20),
    },
  });
