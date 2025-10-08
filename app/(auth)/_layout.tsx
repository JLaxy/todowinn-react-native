import { useThemeContext } from "@/contexts/theme.context";
import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  const { colors } = useThemeContext();
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: colors.bgDark } }}>
      <Stack.Screen name="login/index" />
      <Stack.Screen name="signup/index" />
    </Stack>
  );
}
