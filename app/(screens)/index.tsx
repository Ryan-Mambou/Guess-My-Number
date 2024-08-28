import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./startGame";
import GameScreen from "./gameScreen";
import GameOver from "./gameOver";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";

export default function index() {
  const [pickedNumber, setPickedNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  let screen = <StartGame setPickedNumber={setPickedNumber} />;

  if (pickedNumber > 0) {
    screen = (
      <GameScreen chosenNumber={pickedNumber} setGameOver={setGameOver} />
    );
  }

  if (gameOver && pickedNumber > 0) {
    screen = <GameOver />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootContainer}
    >
      <StatusBar barStyle="default" />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
