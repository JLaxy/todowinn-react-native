import ErrorText from "@/components/error.text";
import { useThemeContext } from "@/contexts/theme.context";
import { authService } from "@/services/auth.service";
import { createGlobalStyles } from "@/styles/globalStyles";
import { createScreenStyle } from "@/styles/screens/loginscreen.style";
import { ApiError } from "@/utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@react-navigation/elements";
import { Link, router } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email!").required("Email is required."),
  pass: yup.string().required("Password is required."),
});

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const { colors, toggleTheme } = useThemeContext();
  const globalStyles = createGlobalStyles(colors);
  const screenStyle = createScreenStyle(colors); // Pass current colors to style

  const onSubmit = async (data: { email: string; pass: string }) => {
    console.log(data);

    try {
      const res = await authService.login(data.email, data.pass);

      if (res.status === 200)
        Toast.show({
          type: "success",
          text1: "Authorized",
          text2: "Logging in...",
          visibilityTime: 2000,
        });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      if ((error as ApiError).statusCode === 500) {
        // If server error
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "An error has occured, please try again.",
        });
        return;
      }
      setError("email", { type: "manual", message: "" });
      setError("pass", { type: "manual", message: "Invalid Credentials!" });
    }
  };

  return (
    <View style={[screenStyle.main_view]}>
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
          <Controller
            name="email"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={[
                  globalStyles.input_field,
                  errors.email && { borderColor: "red", borderWidth: 1 },
                ]}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                inputMode="email"
                returnKeyType="next"
                placeholderTextColor={colors.mainText}
              />
            )}
          />
          <Controller
            name="pass"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={[
                  globalStyles.input_field,
                  errors.pass && { borderColor: "red", borderWidth: 1 },
                ]}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="new-password"
                returnKeyType="done"
                secureTextEntry={true}
                placeholderTextColor={colors.mainText}
              />
            )}
          />
          {errors.pass && <ErrorText message={errors.pass.message} />}
        </View>
        <Pressable
          onPress={handleSubmit(onSubmit)}
          style={[globalStyles.buttons, screenStyle.login_button]}
        >
          <Text style={[globalStyles.button_text]} allowFontScaling>
            Login
          </Text>
        </Pressable>
        <View style={[screenStyle.signup_view]}>
          <Text allowFontScaling style={[globalStyles.body_text]}>
            Don&apos;t have an account?
          </Text>
          <Link
            href="/signup"
            style={[globalStyles.body_text, { color: "hsl(200 100% 40%)" }]}
          >
            {" "}
            Sign Up
          </Link>
        </View>
        <Button onPress={toggleTheme}>Change Mode</Button>
      </View>
    </View>
  );
}
