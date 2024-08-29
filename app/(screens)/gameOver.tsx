import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "@/components/ui/Title";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function GameOver() {
  return (
    <View style={styles.container}>
      <Title title="Game Over!"></Title>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
      <PrimaryButton
        text="Play Again"
        onPress={() => console.log("Play Again")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    color: "white",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    marginVertical: 32,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
