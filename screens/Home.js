import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { handleToggleDrawer } from "../utils/handleToggleDrawer";

export default function Home() {
  const navigation = useNavigation();
  const handleSharePDF = async () => {
    try {
      const pdfAsset = Asset.fromModule(require("../resume.pdf"));
      await pdfAsset.downloadAsync();
      const pdfUri = pdfAsset.localUri;

      const fileInfo = await FileSystem.getInfoAsync(pdfUri);

      if (!fileInfo.exists) {
        throw new Error("PDF file does not exist.");
      }

      await Sharing.shareAsync(pdfUri, {
        mimeType: "application/pdf",
        dialogTitle: "Share your resume",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/home-bg.webp")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => handleToggleDrawer(navigation)}
          activeOpacity={0.8}
        >
          <Ionicons name="menu" size={36} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Text style={styles.headingText}>Hello! I'm</Text>
          <Text style={{ ...styles.headingText, marginBottom: 20 }}>
            Sameer Yadav
          </Text>

          <Text style={styles.paraText}>
            I've embarked on a journey as a Frontend Web Developer, mastering
            skills in HTML, CSS, JavaScript, React JS, and WordPress. My role as
            both a designer and developer has cultivated a deep passion for web
            design. I specialize in creating websites that are not only
            aesthetically pleasing but also highly functional, with a focus on
            simplicity and user-friendliness.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSharePDF}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Get Resume</Text>
          </TouchableOpacity>
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
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  icon: { marginHorizontal: 10 },
  headingText: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  paraText: { color: "#fff", fontSize: 26, lineHeight: 40, marginBottom: 20 },
  buttonContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#1a4551",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: { color: "#fff", fontSize: 22, letterSpacing: 1 },
});
