import { useThemeContext } from "@/contexts/theme.context";
import { createGlobalStyles } from "@/styles/globalStyles";
import { createScreenStyle } from "@/styles/screens/signupscreen.style";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function SignupScreen() {
  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();
  const [repeatPass, setRepeatPass] = useState<string>();

  const { colors } = useThemeContext();
  const globalStyles = createGlobalStyles(colors);
  const screenStyle = createScreenStyle(colors); // Pass current colors to style

  return (
    <View style={[screenStyle.main_view]}>
      <View style={[screenStyle.signup_card]}>
        <Text
          style={[globalStyles.body_text, screenStyle.signup_text]}
          allowFontScaling
        >
          Sign Up
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
          <TextInput
            style={[globalStyles.input_field]}
            value={repeatPass}
            onChangeText={setRepeatPass}
            placeholder="Repeat Password"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="new-password"
            returnKeyType="done"
            secureTextEntry={true}
            placeholderTextColor={colors.mainText}
          />
        </View>
        <Pressable style={[globalStyles.buttons]}>
          <Text style={[globalStyles.button_text]} allowFontScaling>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
