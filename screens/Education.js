import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { eductionData } from "../data/educationData";
import { useNavigation } from "@react-navigation/native";
import { handleToggleDrawer } from "../utils/handleToggleDrawer";

export default function Education() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/home-bg.webp")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => handleToggleDrawer(navigation)}
            activeOpacity={0.8}
          >
            <Ionicons name="menu" size={36} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Education and Certifications</Text>
        </View>
        <View style={styles.timeline}>
          {eductionData.map((item, index) => (
            <View key={index} style={styles.timelineItem}>
              <Ionicons
                name={item.icon}
                size={24}
                color="#fff"
                style={styles.timelineIcon}
              />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>{item.year}</Text>
                <Text style={styles.timelineDescription}>{item.title}</Text>
                <Text style={styles.timelineDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  heading: { color: "#fff", fontSize: 40, fontWeight: "bold", marginLeft: 10 },
  timeline: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  timelineItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  timelineIcon: {
    marginRight: 10,
  },
  timelineContent: {
    flex: 1,
    flexDirection: "column",
    borderLeftWidth: 2,
    borderColor: "#fff",
    paddingLeft: 10,
  },
  timelineTitle: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 5,
  },
  timelineDescription: {
    color: "#fff",
    fontSize: 18,
  },
});
