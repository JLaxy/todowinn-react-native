import { AuthProvider } from "@/contexts/auth.context";
import { ThemeProvider } from "@/contexts/theme.context";
import { OpenSans_800ExtraBold, useFonts } from "@expo-google-fonts/open-sans";
import { PTSans_400Regular } from "@expo-google-fonts/pt-sans";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  const [loaded] = useFonts({
    OpenSans_800ExtraBold,
    PTSans_400Regular,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]); // load fonts

  if (!loaded) return null; // or a simple loading screen

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Stack initialRouteName="index">
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </AuthProvider>
      </ThemeProvider>
      <Toast />
    </>
  );
}
