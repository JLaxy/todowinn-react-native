import DrawerProjectlist from "@/components/drawer-projectlist";
import { ProjectProvider } from "@/contexts/project.context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DashboardScreen from "./dashboard";
import ProfileScreen from "./profile";

export default function DrawerLayout() {
  const Drawer = createDrawerNavigator();
  return (
    <ProjectProvider>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerProjectlist {...props} />}
      >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </ProjectProvider>
  );
}
