import { useProjectContext } from "@/contexts/project.context";
import { useThemeContext } from "@/contexts/theme.context";
import { createComponentStyle } from "@/styles/components/drawer-projectlist.style";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function DrawerProjectlist({
  navigation,
}: DrawerContentComponentProps) {
  const { projects, setSelectedProject } = useProjectContext();

  const { colors } = useThemeContext();
  const componentStyle = createComponentStyle(colors);

  return (
    <View style={[componentStyle.main_view]}>
      <Text>hello world</Text>
      <ScrollView style={[componentStyle.scroll_view]}>
        {projects.map((p) => (
          <Pressable
            key={p.project_id}
            onPress={() => {
              setSelectedProject(p);
              navigation.closeDrawer();
            }}
          >
            <Text>{p.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
