import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as MailComposer from "expo-mail-composer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { handleToggleDrawer } from "../utils/handleToggleDrawer";

export default function Contact() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!subject.trim()) {
      setSubjectError("Subject is required");
      isValid = false;
    } else {
      setSubjectError("");
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    try {
      const isAvailable = await MailComposer.isAvailableAsync();
      if (!isAvailable) {
        console.error("Email composition not available");
        return;
      }

      await MailComposer.composeAsync({
        recipients: ["sameery.020@gmail.com"],
        subject: subject,
        body: message,
        isHtml: false,
      });

      // Reset form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

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
          <Text style={styles.heading}>Have something to say</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              setNameError("");
            }}
            onFocus={() => setNameError("")}
          />

          {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => {
              setEmail(text);
              setEmailError("");
            }}
            onFocus={() => setEmailError("")}
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={subject}
            onChangeText={(text) => {
              setSubject(text);
              setSubjectError("");
            }}
            onFocus={() => setSubjectError("")}
          />
          {subjectError ? (
            <Text style={styles.error}>{subjectError}</Text>
          ) : null}
          <TextInput
            style={{ ...styles.input, height: 100 }}
            placeholder="Message"
            value={message}
            onChangeText={(text) => {
              setMessage(text);
              setMessageError("");
            }}
            onFocus={() => setMessageError("")}
            multiline
          />
          {messageError ? (
            <Text style={styles.error}>{messageError}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Send Message</Text>
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  heading: { color: "#fff", fontSize: 40, fontWeight: "bold", marginLeft: 10 },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    opacity: 0.7,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#1a4551",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
