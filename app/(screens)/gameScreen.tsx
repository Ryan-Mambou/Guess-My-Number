import { View, SafeAreaView, Text, StyleSheet, Alert } from "react-native";
import React, { useState, useEffect, useMemo } from "react";
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/numberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";

function generateRandomNumber(min: number, max: number, exclude: number) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
  } while (randomNumber === exclude && max - min > 1);

  return randomNumber;
}

interface GameScreenProps {
  chosenNumber: number;
  setGameOver: (gameOver: boolean) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  chosenNumber,
  setGameOver,
}: GameScreenProps) {
  const initialGuess = generateRandomNumber(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      setGameOver(true);
    }
  }, [currentGuess, chosenNumber]);

  const handleGuess = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "higher" && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "higher") {
      minBoundary = currentGuess + 1;
    } else if (direction === "lower") {
      maxBoundary = currentGuess;
    }
    const newGuess = generateRandomNumber(
      minBoundary,
      maxBoundary,
      chosenNumber
    );
    setCurrentGuess(newGuess);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Guess the Number"></Title>
      <NumberContainer currentGuess={currentGuess} />
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton
            text="-"
            onPress={() => handleGuess("lower")}
          ></PrimaryButton>
          <PrimaryButton
            text="+"
            onPress={() => handleGuess("higher")}
          ></PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "white",
  },
});
