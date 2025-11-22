import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = (props) => {
    const nav = useRouter()

    const go_to = () => {
        nav.navigate({
            pathname: '/MealScreen',
            params: { ...props }
        })
    }

    return (
        <TouchableOpacity onPress={go_to} style={styles.menu}>
            <View style={styles.imageMenu}>
                <Image style={styles.image} source={props.image} />
            </View>
            <Text style={styles.nameMenu}>
                {props.name}
            </Text>
            <Text style={styles.priceMenu}>
                {props.price}
            </Text>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    menu: {
        borderWidth: 1,
        width: 400,
        height: 100,
        margin: 10,
        alignSelf: "center",
        borderRadius: 5,
        borderColor: "gray",
        backgroundColor: "gray",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingRight: 50
    },
    imageMenu: {
        borderWidth: 1,
        width: 90,
        height: 90,
        margin: 5,
        borderRadius: 5,
        backgroundColor: "darkgray",
        borderColor: "darkgray",

    },
    nameMenu: {
        alignContent: "center",
        fontSize: 30,
        color: "white",
    },
    txt: {
        margin: 10,
        fontSize: 15,
        color: "grey",

    },
    searchIcon: {
        alignContent: "center",
        color: "#4E4C5A",


    },
    image: {
        width: 90,
        height: 90,
        borderWidth: 3,
        borderColor: "#b2b2b2bb",
    },
    resname: {
        alignSelf: "center",
    },
    priceMenu: {
        alignContent: "center",
        fontSize: 30,
        color: "white",

    }

})