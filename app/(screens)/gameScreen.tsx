import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/numberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "@/components/game/guessLogItem";

function generateRandomNumber(min: number, max: number, exclude: number) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
  } while (randomNumber === exclude && max - min > 1);

  return randomNumber;
}

interface GameScreenProps {
  chosenNumber: number | null;
  setGameOver: (gameOver: boolean) => void;
  incrementNumberOfRounds: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  chosenNumber,
  setGameOver,
  incrementNumberOfRounds,
}: GameScreenProps) {
  const initialGuess =
    chosenNumber && generateRandomNumber(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess!]);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      setGameOver(true);
    }
  }, [currentGuess, chosenNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const handleGuess = (direction: string) => {
    if (
      (direction === "lower" &&
        chosenNumber &&
        currentGuess &&
        currentGuess < chosenNumber) ||
      (direction === "higher" &&
        chosenNumber &&
        currentGuess &&
        currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "higher") {
      minBoundary = currentGuess! + 1;
    } else if (direction === "lower") {
      maxBoundary = currentGuess!;
    }
    const newGuess =
      chosenNumber &&
      generateRandomNumber(minBoundary, maxBoundary, chosenNumber);
    setCurrentGuess(newGuess);
    incrementNumberOfRounds();
    setGuessRounds((prev: number[]) => [newGuess!, ...prev]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Guess the Number"></Title>
      <NumberContainer currentGuess={currentGuess} />
      <Card>
        <InstructionText
          text="Higher or Lower?"
          style={styles.instructionText}
        ></InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text={<Ionicons name="remove" size={24} color="white" />}
              onPress={() => handleGuess("lower")}
            ></PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text={<Ionicons name="add" size={24} color="white" />}
              onPress={() => handleGuess("higher")}
            ></PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item }) => (
            <GuessLogItem
              guess={guessRounds.indexOf(item) + 1}
              opponentGuess={item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
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
  instructionText: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
