import React from "react";
import { Image, Text } from "react-native";
import logo from "../../../assets/bat.jpg";
import { styles } from "./Style";

export function BatLogo() {
  return (
    <>
      <Text style={styles.text}>Bat Pass Generator</Text>
      <Image source={logo} style={styles.image} />
    </>
  );
}
