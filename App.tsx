import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateTime from "./components/DateTime";
import WeatherScroll from "./components/WeatherScroll";

const background_img = require('./assets/background-image.jpg')
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background_img} style={styles.background_image}>
        <DateTime/>
        <WeatherScroll/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
