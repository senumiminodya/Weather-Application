import React from "react";
import {View, ScrollView, Text, Image, StyleSheet} from "react-native";
import FutureForecast from "./FutureForecast";

const WeatherScroll = () => {
    return(
        <ScrollView horizontal={true} style={styles.scrollview}>
            <CurrentTemperature/>
            <FutureForecast/>
        </ScrollView>
    )
}

const CurrentTemperature = () => {
    const img = {uri: 'https://img.icons8.com/?size=100&id=HeerCPLqyxuQ&format=png&color=000000'}
    return(
        <View style={styles.currentTempContainer}>
            <Image source={img} style={styles.image}/>
            <view style={styles.otherContainer}>
                <Text style={styles.day}>Sunday</Text><br/><br/>
                <Text style={styles.temp}>Night-28&#176;C</Text><br/>
                <Text style={styles.temp}>Day-35&#176;C</Text>
            </view>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 0.6,
        backgroundColor: '#B4BCEA',
        padding: 30
    },
    image: {
        width: 150,
        height: 150,
    },
    currentTempContainer: {
        flexDirection: "row",
        backgroundColor: '#CDC7EB',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#a5a1b7",
        padding: 15,
    },
    day: {
      fontSize: 20,
      color: "black",
      backgroundColor: '#f3f2fc',
      padding: 10,
      textAlign: "center",
      borderRadius: 50,
      fontWeight: "200",
      marginBottom: 15
    },
    temp: {
        fontSize: 16,
        color: "black",
        fontWeight: "100",
        textAlign: "center",
    },
    otherContainer: {
        paddingRight: 40,
    }
})

export default WeatherScroll