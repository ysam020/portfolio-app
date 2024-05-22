import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Education from "./screens/Education";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";
import Contact from "./screens/Contact";
import DrawerComponent from "./components/Drawer";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerComponent {...props} />}
        screenOptions={({ route }) => ({
          drawerLabel: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Skills") {
              iconName = focused ? "cog" : "cog-outline";
            } else if (route.name === "Projects") {
              iconName = focused ? "folder" : "folder-outline";
            } else if (route.name === "Contact") {
              iconName = focused ? "mail" : "mail-outline";
            }

            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Ionicons
                  name={iconName}
                  size={20}
                  color="#fff"
                  style={{ marginRight: 10 }}
                />
                <Text style={{ color: "#fff", fontSize: 18 }}>
                  {route.name}
                </Text>
              </View>
            );
          },
          drawerActiveBackgroundColor: "#1a4551",
          headerShown: false,
        })}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Education" component={Education} />
        <Drawer.Screen name="Experience" component={Experience} />
        <Drawer.Screen name="Skills" component={Skills} />
        <Drawer.Screen name="Projects" component={Projects} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
