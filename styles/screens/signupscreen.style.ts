import { scale, scaleFont, verticalScale } from "@/utils/scale";
import { StyleSheet } from "react-native";
import { lightTheme } from "../themes";

export const createScreenStyle = (colors: typeof lightTheme.colors) =>
  StyleSheet.create({
    main_view: {
      flex: 1,
      justifyContent: "center",
    },

    signup_card: {
      display: "flex",
      padding: scale(25),
      margin: scale(25),
      marginTop: scale(45),
      borderRadius: scale(15),
      backgroundColor: colors.bg,
    },

    signup_text: {
      textAlign: "center",
      fontSize: scaleFont(25),
      fontWeight: "bold",
      marginBottom: verticalScale(20),
    },

    fields_view: {
      gap: scale(10),
      marginBottom: scale(35),
    },
  });
