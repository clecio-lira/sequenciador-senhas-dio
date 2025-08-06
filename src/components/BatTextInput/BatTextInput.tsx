import React from "react";
import { TextInput } from "react-native";

import { styles } from "./Style";

export function BatTextInput() {
  return (
    <>
      <TextInput style={styles.input} placeholder="Password" />
    </>
  );
}
