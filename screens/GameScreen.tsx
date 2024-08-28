import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameScreen() {
  return (
    <View>
      <TextInput placeholder="Enter your name" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({});

export default GameScreen;
