import { useThemeContext } from "@/contexts/theme.context";
import { createGlobalStyles } from "@/styles/globalStyles";
import React from "react";
import { Text } from "react-native";

export default function ErrorText({
  message,
}: {
  message: string | undefined;
}) {
  const { colors } = useThemeContext();
  const globalStyles = createGlobalStyles(colors);
  return <Text style={globalStyles.error_text}>{message}</Text>;
}
