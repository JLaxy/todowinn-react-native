import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard/index" />
      <Tabs.Screen name="profile/index" />
    </Tabs>
  );
}
