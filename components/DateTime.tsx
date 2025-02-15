import React from "react";
import {View, Text, StyleSheet} from "react-native";

const WeatherItem = ({title, value, unit}) => {
    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = () => {
    return(
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>12:30 am</Text>
                </View>
                <View>
                    <Text style={styles.subHeading}>Monday, June 7</Text>
                </View>
                <View style={styles.weatherItemContainer}>
                    <WeatherItem title="Humidity" value="79" unit="%"/>
                    <WeatherItem title="Pressure" value="100" unit="hdk"/>
                    <WeatherItem title="Sunrise" value="6 " unit="am"/>
                    <WeatherItem title="Sunset" value="7" unit="pm"/>
                </View>
            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.timezone}>Asia/Kolkata</Text>
                <Text style={styles.latlong}>4.22w 50h</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 25
    },
    heading: {
        fontSize: 45,
        color: 'Black',
        fontWeight: '100'
    },
    subHeading: {
        fontSize: 25,
        color: 'Black',
        fontWeight: '300',
    },
    rightAlign: {
        textAlign: "right",
        marginTop: 20
    },
    timezone: {
        fontSize: 20,
        color: 'Black',
    },
    latlong: {
        fontSize: 16,
        color: 'Black',
        fontWeight: '700'
    },
    weatherItemContainer: {
        backgroundColor: '#779dd6',
        color: 'black',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#3d5275'
    },
    weatherItem: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    weatherItemTitle: {
        color: 'Black',
        fontSize: 14,
        fontWeight: 100
    }
})
export default DateTime;