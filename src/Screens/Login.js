import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import fontStyles from '../Common/fontStyles'

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uber Freight</Text>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#aaa"
          keyboardType="ascii-capable"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.biometricContainer}>
        <Icon name="fingerprint" size={25} color="#000" />
        <Text style={styles.biometricText}>Enable Biometric</Text>
      </View>

      <Text style={styles.versionText}>Version 2.1.2.202</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: wp("9%"),
    fontWeight: "600",
    marginBottom: hp("7%"),
    textAlign: "center",
    ...fontStyles.Montserrat_SemiBold
  },
  inputWrapper: {
    width: "100%",
    marginBottom: hp("2%"),
  },
  label: {
    fontSize: wp("4.3%"),
    marginLeft: wp("1%"),
    marginBottom: hp("0.5%"),
    color: "#000",
    ...fontStyles.Montserrat_Regular
  },
  input: {
    width: "100%",
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    padding: wp("3.4%"),
    fontSize: wp("4%"),
    ...fontStyles.Montserrat_Medium,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: hp("1.4%"),
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: hp("2.5%"),
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: "400",
    ...fontStyles.Montserrat_Regular
  },
  biometricContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("10%"),
    bottom:15
  },
  biometricText: {
    fontSize: wp("4%"),
    marginLeft: wp("2%"),
    color: "#222",
    ...fontStyles.Montserrat_Medium
  },
  versionText: {
    position: "absolute",
    right: wp("7%"),
    bottom: hp("3%"),
    color: "#222",
    fontSize: wp("3.7%"),
    opacity: 0.7,
  }
});

export default Login;