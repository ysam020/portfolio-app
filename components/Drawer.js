import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const DrawerComponent = (props) => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const handlePhonePress = () => {
    Linking.openURL("tel:+918377971782");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:sameery.020@gmail.com");
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo.jpg")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.text}>Sameer Yadav</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handlePhonePress}>
          <View style={styles.contactInfo}>
            <Ionicons name="call" size={16} color="#fff" style={styles.icon} />
            <Text style={styles.contactInfoText}>+91 8377971782</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleEmailPress}>
          <View style={styles.contactInfo}>
            <Ionicons name="mail" size={16} color="#fff" style={styles.icon} />
            <Text style={styles.contactInfoText}>sameery.020@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handlePress("https://github.com/ysam020")}
          >
            <Ionicons
              name="logo-github"
              size={36}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handlePress("https://www.linkedin.com/in/ysam090/")}
          >
            <Ionicons
              name="logo-linkedin"
              size={36}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "#fff",
    marginVertical: 10,
    letterSpacing: 1,
    paddingHorizontal: 30,
  },
  contactInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    paddingHorizontal: 30,
  },
  contactInfoText: {
    fontSize: 16,
    color: "#fff",
    letterSpacing: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#1d5260",
  },
  logoContainer: {
    paddingHorizontal: 30,
    borderRadius: 100,
    overflow: "hidden",
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 30,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 30,
    paddingHorizontal: 30,
  },
  icon: {
    marginRight: 10,
  },
});

export default DrawerComponent;
