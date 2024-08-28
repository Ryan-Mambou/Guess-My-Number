import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Colors } from "../../constants/Colors";
import Title from "@/components/ui/Title";

interface StartGameProps {
  setPickedNumber: (number: number) => void;
}

export default function StartGame({ setPickedNumber }: StartGameProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleInputChange = (value: string) => {
    setEnteredNumber(value);
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    }

    setPickedNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title title="Guess the Number"></Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={handleInputChange}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton text="Reset" onPress={handleReset}></PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text="Confirm"
              onPress={handleConfirm}
            ></PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 80,
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 80,
  },

  inputContainer: {
    padding: 16,
    alignItems: "center",
    marginVertical: 32,
    marginHorizontal: "auto",
    borderRadius: 8,
    justifyContent: "center",
    gap: 10,
    width: "90%",
    backgroundColor: Colors.primary800,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    color: Colors.accent500,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    borderRadius: 5,
    padding: 10,
    width: "20%",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});
