import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Linking,
  Platform,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons"
import fontStyles from "../Common/fontStyles";

const Welcome = ({ navigation }) => {
  const [isUAT, setIsUAT] = useState(true);

  return (
    <View style={styles.container}>
      {/* Switch Selector */}
      <View style={styles.envSwitchContainer}>
        <Text style={[styles.envText, !isUAT && styles.selectedEnvText]}>PROD</Text>
        <Switch
          value={isUAT}
          onValueChange={setIsUAT}
          thumbColor={Platform.OS === "android" ? (isUAT ? "#222" : "#fff") : undefined}
          trackColor={{ false: "#ccc", true: "#ccc" }}
          style={styles.envSwitch}
        />
        <Text style={[styles.envText, isUAT && styles.selectedEnvText]}>UAT</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Uber Freight</Text>
      <Text style={styles.subtitle}>Sign in with one of these accounts</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonPrimaryText}>TMS Provided Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate("Login")}>
        <Icon name="account-group-outline" size={22} color="#222" style={{ marginRight: wp("2%") }} />
        <Text style={styles.buttonSecondaryText}>Other Organization</Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.separator} />
      </View>

      {/* Tracking Button */}
      <TouchableOpacity style={styles.buttonSecondary}>
        <Ionicon name="send-sharp" size={22} color="#222" style={{ marginRight: wp("2%") }} />
        <Text style={styles.buttonSecondaryText}>Tracking</Text>
      </TouchableOpacity>

      {/* Info Disclaimer */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          If there are multiple users on this device, access to this application may not be limited to a single user. It is your responsibility to keep your device and access to the app secure.
        </Text>
      </View>

      {/* Terms & Conditions */}
      <View style={styles.linkContainer}>
        <Text
          style={styles.linkText}
          onPress={() => Linking.openURL("https://www.uber.com/legal/terms/")}
        >
          Terms & Conditions
        </Text>
        <Text style={styles.linkSeparator}> | </Text>
        <Text
          style={styles.linkText}
          onPress={() => Linking.openURL("https://www.uber.com/legal/privacy/")}
        >
          Privacy Policy
        </Text>
      </View>

      {/* Version Number */}
      <Text style={styles.versionText}>Version 2.1.2.202</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    paddingTop: hp("6%"),
  },
  envSwitchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  envText: {
    fontSize: wp("3.3%"),
    color: "#000",
    fontWeight: "400",
    paddingHorizontal: wp("1.5%"),
    ...fontStyles.Montserrat_Regular
  },
  selectedEnvText: {
    color: "#222",
    fontWeight: "400",
    ...fontStyles.Montserrat_Medium
  },
  envSwitch: {
    marginHorizontal: wp("1.5%"),
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  title: {
    fontSize: wp("10%"),
    fontWeight: "600",
    marginTop: hp("3.5%"),
    marginBottom: hp("1%"),
    textAlign: "center",
    ...fontStyles.Montserrat_SemiBold
  },
  subtitle: {
    fontSize: wp("4.1%"),
    color: "#444",
    marginBottom: hp("1%"),
    textAlign: "center",
    ...fontStyles.Montserrat_Regular
  },
  buttonPrimary: {
    backgroundColor: "#000",
    height: hp("6%"),
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("1.5%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonPrimaryText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: wp("4.4%"),
    ...fontStyles.Montserrat_Regular
  },
  buttonSecondary: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    height: hp("6%"),
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginBottom: hp("1.5%"),
  },
  buttonSecondaryText: {
    color: "#000",
    fontWeight: "500",
    fontSize: wp("4.4%"),
    ...fontStyles.Montserrat_Medium
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: hp("0.9%"),
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: wp("3%"),
    color: "#222",
    fontSize: wp("4%"),
  },
  infoContainer: {
    paddingHorizontal: wp("1%"),
    marginBottom: hp("1%"),
    position: "absolute",
    bottom: hp('15%'),
    width: wp('90%'),
    alignSelf: "center"
  },
  infoText: {
    color: "#222",
    fontSize: wp("3.8%"),
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: hp('11%'),
    width: wp('90%'),
    alignSelf: "center",
    position: "absolute",
  },
  linkText: {
    color: "#1673CC",
    fontSize: wp("3.4%"),
    textDecorationLine: "underline",
  },
  linkSeparator: {
    color: "#444",
    fontSize: wp("4.1%"),
  },
  versionText: {
    position: "absolute",
    bottom: hp("2.5%"),
    right: wp("6%"),
    color: "#000",
    fontSize: wp("3.3%"),
    opacity: 0.7,
    ...fontStyles.Montserrat_Regular
  },
});

export default Welcome;
