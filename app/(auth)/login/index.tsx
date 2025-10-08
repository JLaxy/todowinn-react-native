import { useThemeContext } from "@/contexts/theme.context";
import { createGlobalStyles } from "@/styles/globalStyles";
import { createScreenStyle } from "@/styles/screens/loginscreen.style";
import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { verticalScale } from "react-native-size-matters";

export default function LoginScreen() {
  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();

  const { colors, toggleTheme } = useThemeContext();
  const globalStyles = createGlobalStyles(colors);
  const screenStyle = createScreenStyle(colors); // Pass current colors to style

  return (
    <View>
      <Text
        style={[globalStyles.title_text, screenStyle.title_text]}
        allowFontScaling
      >
        ToDowinn Project Manager
      </Text>
      <View style={[screenStyle.login_card]}>
        <Text
          style={[globalStyles.body_text, screenStyle.login_text]}
          allowFontScaling
        >
          Login
        </Text>
        <View style={[screenStyle.fields_view]}>
          <TextInput
            style={[globalStyles.input_fields]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            inputMode="email"
            returnKeyType="next"
          />
          <TextInput
            style={[globalStyles.input_fields]}
            value={pass}
            onChangeText={setPass}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="new-password"
            returnKeyType="done"
            secureTextEntry={true}
          />
        </View>
        <Button style={[{ marginBottom: verticalScale(3) }]}>Login</Button>
        <View style={[screenStyle.signup_view]}>
          <Text allowFontScaling>Don&apos;t have an account?</Text>
          <Link href="/signup"> Sign Up</Link>
        </View>
        <Button onPress={toggleTheme}>Change Mode</Button>
      </View>
    </View>
  );
}
