import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { handleToggleDrawer } from "../utils/handleToggleDrawer";

const Projects = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth * 0.8;

  const data = [
    {
      title: "Project 1: Whatsapp web clone using React JS",
      description:
        "A real-time chat app with media sharing, emojis and GIFs. It has dark theme, option to choose chat wallpapers, search messages, star important messages, and much more. Not just that, you can also block annoying friends 😄. Login through Google account is required.",
      image: require("../assets/wapp.webp"),
      github: "https://github.com/ysam020/Wapp",
      project: "https://wapp-c2920.firebaseapp.com/",
    },
    {
      title:
        "Project 2: Expense tracker app using React JS and React-apex-charts",
      description:
        "An expense tracker app where where you can manage your expenditure by tracking your incomes and expenses through simple graphs. You can watch your weekly, monthly or all transactions, category-wise transactions, and savings. Login through google account is required.",
      image: require("../assets/expense.webp"),
      github: "https://github.com/ysam020/Expense-traker",
      project: "https://reactjs-expensetracker.web.app/",
    },
    {
      title: "Project 3: E-commerce website using MERN stack",
      description:
        "An e-commerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide a full-stack solution for online shopping.",
      image: require("../assets/depot.webp"),
      github: "https://github.com/ysam020/Depot-mern",
      project: "https://depot-mern.netlify.app/",
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <SafeAreaView>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.description}</Text>
      <Image source={item.image} style={styles.image} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, { width: "48%" }]}
          onPress={() => openLink(item.project)}
        >
          <Ionicons name="link" size={20} color="white" />
          <Text style={styles.buttonText}>Project</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.button, { width: "48%" }]}
          onPress={() => openLink(item.github)}
        >
          <Ionicons name="logo-github" size={20} color="white" />
          <Text style={styles.buttonText}>Github</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return (
    <ImageBackground
      source={require("../assets/home-bg.webp")}
      style={styles.backgroundImage}
    >
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => handleToggleDrawer(navigation)}
            activeOpacity={0.8}
          >
            <Ionicons name="menu" size={36} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Projects</Text>
        </View>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.9}
          inactiveSlideOpacity={0.3}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Projects;

const styles = StyleSheet.create({
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
  title: {
    color: "#fff",
    marginBottom: 20,
    fontSize: 24,
  },
  body: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 30,
  },
  image: {
    height: 350,
    resizeMode: "cover",
    borderRadius: 20,
    width: "100%",
    marginBottom: 30,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1a4551",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 1,
    textAlign: "center",
    marginLeft: 5,
  },
});
