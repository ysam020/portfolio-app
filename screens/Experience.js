import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { handleToggleDrawer } from "../utils/handleToggleDrawer";

export default function Experience() {
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
          <Text style={styles.heading}>Experience</Text>
        </View>

        <View style={styles.timelineItem}>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineTitle}>
              Alluvium IOT Solutions Private Limited
            </Text>
            <Text style={styles.timelineSubtitle}>May 2023 - Present</Text>
          </View>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.timelineDescription}>
            • Leadership and Full-Stack Development{"\n"}
            In my previous role leading the AlVision EXIM project, I served as
            the sole developer, gaining invaluable insights into full-stack
            development. Leveraging my expertise in React.js and Node.js, I
            crafted a robust solution aimed at streamlining the export-import
            business. This experience equipped me with the skills to deploy
            applications on AWS EC2 and utilize S3 for storage, ensuring
            scalability and reliability.
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.timelineDescription}>
            • Frontend Development Contributions{"\n"}
            At Alluvium IOT Solutions, I contributed to three pivotal
            projects—AlVision STAMP, AlVision TEX, and AlVision PI—where my
            focus was on frontend development. This hands-on experience not only
            refined my technical abilities but also reinforced my commitment to
            delivering high-quality, user-friendly applications.
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.timelineDescription}>
            • Automated Report Generation{"\n"}A notable achievement in my
            career includes mastering event scheduling and automating report
            generation using Sendgrid. By implementing automated report delivery
            in PDF and Excel formats, I significantly enhanced efficiency and
            client satisfaction. This experience showcases my dedication to
            streamlining processes and leveraging technology to drive results.
          </Text>
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
  timelineItem: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 30,
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
  timelineSubtitle: { color: "#fff", fontSize: 18 },
  timelineDescription: {
    color: "#fff",
    fontSize: 18,
  },
  bulletPoint: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});
