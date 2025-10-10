import { useAuthContext } from "@/contexts/auth.context";
import { authService } from "@/services/auth.service";
import { testService } from "@/services/test.service";
import { Button } from "@react-navigation/elements";
import React from "react";
import { Text, View } from "react-native";

export default function DashboardScreen() {
  const { setIsLoggedIn } = useAuthContext();
  const onSubmit = async () => {
    console.log(await testService.private_test_ping());
  };

  const logout = async () => {
    console.log(await authService.logout());
    setIsLoggedIn(false);
  };

  return (
    <View>
      <Text>dashboard screen</Text>
      <Button onPress={onSubmit}>Test</Button>
      <Button onPress={logout}>Logout</Button>
    </View>
  );
}
