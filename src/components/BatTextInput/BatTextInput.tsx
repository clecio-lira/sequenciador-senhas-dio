import React from "react";
import { TextInput } from "react-native";

import { styles } from "./Style";

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={props.pass}
        editable={false}
      />
    </>
  );
}
