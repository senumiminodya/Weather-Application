import {View, Text, Image, StyleSheet} from "react-native";

const FutureForecast = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <FutureForecastItem/>
            <FutureForecastItem/>
            <FutureForecastItem/>
        </View>
    )
}
const FutureForecastItem = () => {
    const img = {uri: 'https://img.icons8.com/?size=100&id=HeerCPLqyxuQ&format=png&color=000000'}
    return (
        <View style={styles.futureForecastItemContainer}>
            <Text style={styles.day}>Mon</Text>
            <Image source={img} style={styles.image}/>
            <Text style={styles.temp}>Night - 26&#176;C</Text>
            <Text style={styles.temp}>Day - 36&#176;C</Text>
        </View>
    )
}
export default FutureForecast;

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80
    },
    futureForecastItemContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CDC7EB',
        borderColor: "#a5a1b7",
        borderRadius: 10,
        borderWidth: 1,
        padding: 20,
        marginLeft: 10
    },
    day: {
        fontSize: 20,
        color: "black",
        backgroundColor: '#f3f2fc',
        padding: 5,
        textAlign: "center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15,
        marginTop: 10
    },
    temp: {
        fontSize: 16,
        color: "black",
        fontWeight: "100",
        textAlign: "center",
    }
})