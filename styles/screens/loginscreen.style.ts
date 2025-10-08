import { scale, scaleFont, verticalScale } from "@/utils/scale";
import { StyleSheet } from "react-native";
import { lightTheme } from "../themes";

export const createScreenStyle = (colors: typeof lightTheme.colors) =>
  StyleSheet.create({
    title_text: {
      textAlign: "center",
      fontSize: scaleFont(35),
      paddingTop: verticalScale(60),
      color: colors.text,
    },

    login_card: {
      display: "flex",
      padding: scale(25),
      margin: scale(25),
      marginTop: scale(45),
      borderRadius: scale(15),
      backgroundColor: colors.bg,
    },

    login_text: {
      textAlign: "center",
      fontSize: scaleFont(25),
      fontWeight: "bold",
      marginBottom: verticalScale(20),
      color: colors.text,
    },

    fields_view: {
      gap: scale(10),
      marginBottom: scale(15),
    },

    signup_view: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  });
