import ErrorText from "@/components/error.text";
import { useThemeContext } from "@/contexts/theme.context";
import { memberService } from "@/services/member.service";
import { createGlobalStyles } from "@/styles/globalStyles";
import { createScreenStyle } from "@/styles/screens/signupscreen.style";
import { ApiError } from "@/utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import * as yup from "yup";

const signupSchema = yup.object().shape({
  email: yup.string().email("Invalid email!").required("Email is required."),
  pass: yup
    .string()
    .min(8, "Password must be atleast 8 characters!")
    .required("Password is required."),
  repeatPass: yup
    .string()
    .oneOf([yup.ref("pass")], "Passwords do not match!")
    .required("Please repeat your password."),
}); // Schema for validation

export default function SignupScreen() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) }); // For forms

  const { colors } = useThemeContext();
  const globalStyles = createGlobalStyles(colors);
  const screenStyle = createScreenStyle(colors); // Pass current colors to style

  const router = useRouter();

  const onSubmit = async (data: {
    email: string;
    pass: string;
    repeatPass: string;
  }) => {
    try {
      console.log(`submitted: ${data}`);
      const res = await memberService.signup(data.email, data.pass);

      if (res.status === 201) {
        Toast.show({
          type: "success",
          text1: "Member Created",
          text2: "Member successfully created! Please login.",
          visibilityTime: 2300,
        });
        setTimeout(() => router.replace("/login"), 1500); // Reditect after 2 seconds
      }
    } catch (error) {
      handleError(error as ApiError);
    }
  };

  const handleError = (error: ApiError) => {
    if (error.statusCode === 409)
      setError("email", { type: "manual", message: "Email is already taken!" });
    else if (error.statusCode === 400)
      setError("email", { type: "manual", message: "Invalid email!" });
    else
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong, please try again.",
      });
  };

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
          {errors.email && <ErrorText message={errors.email.message} />}
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
          <Controller
            name="repeatPass"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={[
                  globalStyles.input_field,
                  errors.repeatPass && { borderColor: "red", borderWidth: 1 },
                ]}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Repeat Password"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="new-password"
                returnKeyType="done"
                secureTextEntry={true}
                placeholderTextColor={colors.mainText}
              />
            )}
          />
          {errors.repeatPass && (
            <ErrorText message={errors.repeatPass.message} />
          )}
        </View>
        <Pressable
          style={[globalStyles.buttons]}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={[globalStyles.button_text]} allowFontScaling>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
