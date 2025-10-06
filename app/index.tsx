import "@/styles/global.css";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="flex bg-amber-500 text-lg">Hello worldss !</Text>
    </View>
  );
}
