import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { handleToggleDrawer } from "../utils/handleToggleDrawer";

// Import the images
import htmlImage from "../assets/html.webp";
import cssImage from "../assets/css.webp";
import jsImage from "../assets/js.webp";
import reactImage from "../assets/react.webp";
import nextImage from "../assets/nextjs.webp";
import reduxImage from "../assets/redux.webp";
import firebaseImage from "../assets/firebase.webp";
import githubImage from "../assets/git.webp";
import sassImage from "../assets/sass.webp";
import muiImage from "../assets/mui.webp";
import awsImage from "../assets/aws.webp";
import wordpressImage from "../assets/wordpress.webp";

export default function Skills() {
  const navigation = useNavigation();
  const data = [
    { url: htmlImage },
    { url: cssImage },
    { url: jsImage },
    { url: reactImage },
    { url: nextImage },
    { url: reduxImage },
    { url: firebaseImage },
    { url: githubImage },
    { url: sassImage },
    { url: muiImage },
    { url: awsImage },
    { url: wordpressImage },
  ];

  // Function to split the data into pairs
  const splitArrayIntoPairs = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i += 2) {
      result.push(array.slice(i, i + 2));
    }
    return result;
  };

  // Split the data into pairs
  const pairs = splitArrayIntoPairs(data);

  return (
    <ImageBackground
      source={require("../assets/home-bg.webp")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => handleToggleDrawer(navigation)}
            activeOpacity={0.8}
          >
            <Ionicons name="menu" size={36} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Skills</Text>
        </View>
        <ScrollView>
          {pairs.map((pair, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {pair.map((item, columnIndex) => (
                <View key={columnIndex} style={styles.column}>
                  <BlurView intensity={20} style={styles.blur}>
                    <Image source={item.url} style={styles.image} />
                  </BlurView>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  column: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  blur: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
