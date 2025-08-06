import React from "react";
import { View, StatusBar } from "react-native";
import { styles } from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <BatLogo />
      </View>

      <View>
        <BatTextInput />
      </View>

      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <StatusBar translucent={true} />
    </View>
  );
};

export default Home;
