import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./Style";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import passGenerateService from "../../services/passGenerateService";
import * as Clipboard from "expo-clipboard";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    let gerenateToken = passGenerateService();
    setPass(gerenateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      {/* <Button
        accessibilityLabel="Clique"
        onPress={() => {
          console.log("ola");
        }}
        title="Clique"
        color="yellow"
      /> */}
      <BatTextInput pass={pass} />

      <Pressable onPress={handleGenerateButton}>
        <Text style={styles.gerar}>Gerar</Text>
      </Pressable>

      <Pressable onPress={handleCopyButton}>
        <Text style={styles.copiar}>Copiar</Text>
      </Pressable>
    </>
  );
}
