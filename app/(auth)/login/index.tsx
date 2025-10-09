import { useThemeContext } from "@/contexts/theme.context";
import { createGlobalStyles } from "@/styles/globalStyles";
import { createScreenStyle } from "@/styles/screens/loginscreen.style";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

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
            style={[globalStyles.input_field]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            inputMode="email"
            returnKeyType="next"
            placeholderTextColor={colors.mainText}
          />
          <TextInput
            style={[globalStyles.input_field]}
            value={pass}
            onChangeText={setPass}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="new-password"
            returnKeyType="done"
            secureTextEntry={true}
            placeholderTextColor={colors.mainText}
          />
        </View>
        <Pressable style={[globalStyles.buttons, screenStyle.login_button]}>
          <Text style={[globalStyles.button_text]}>Login</Text>
        </Pressable>
        <View style={[screenStyle.signup_view]}>
          <Text allowFontScaling style={[globalStyles.body_text]}>
            Don&apos;t have an account?
          </Text>
          <Link href="/signup" style={[globalStyles.body_text]}>
            {" "}
            Sign Up
          </Link>
        </View>
        {/* <Button onPress={toggleTheme}>Change Mode</Button> */}
      </View>
    </View>
  );
}
