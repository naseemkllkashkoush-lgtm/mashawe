import { useRouteInfo } from 'expo-router/build/hooks';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const MealScreen = () => {
    const { params } = useRouteInfo();

    return (

        <ScrollView style={styles.container}>
            <View style={styles.hh}>
                <Text style={styles.name}>Name: {params?.name}</Text>

            </View>
            <Text style={styles.prc}>Price: {params?.price}</Text>

            <View style={styles.bb}>
                <Text style={styles.adress}>RAW MEATS </Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentScroll} style={styles.scroll} horizontal>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        steak
                    </Text>
                </View>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        kebab
                    </Text>
                </View>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        kidny
                    </Text>
                </View>
            </ScrollView>
             <View style={styles.bb}>
                <Text style={styles.adress}> MASHAWE </Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentScroll} style={styles.scroll} horizontal>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        steak
                    </Text>
                </View>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        kebab
                    </Text>
                </View>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        kidny
                    </Text>
                </View>
            </ScrollView>
            <ScrollView contentContainerStyle={styles.contentScroll} style={styles.scroll} horizontal>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        steak
                    </Text>
                </View>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        kebab
                    </Text>
                </View>
                <View style={styles.meals}>
                    <View style={styles.img} >
                    </View>
                    <Text style={styles.adress2}>
                        kidny
                    </Text>
                </View>
            </ScrollView>
            
        </ScrollView>
        
    )
}


export default MealScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        // alignItems: "center"
    },

    hh: {
        alignSelf: "center",
        color: "grey",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "grey",
        backgroundColor: "lightgrey",
        width: 220,
        height: 50,
        justifyContent: "center",
        alignItems: "center"


    },
    prc: {

        alignSelf: "center",
        color: "darkgrey",
        margin: 1,
        borderWidth: 2,
        width: 220,
        height: 50,
        fontSize: 30,
        borderRadius: 15,
        borderColor: "white",
        backgroundColor: "white",
        alignContent: "center",


    },
    name: {
        fontSize: 30,
        color: "white"
    },
    meals: {
        borderWidth: 1,
        width: 250,
        height: 150,
        alignSelf: "center",
        borderRadius: 5,
        borderColor: "darkgray",
        backgroundColor: "darkgray",
        flexDirection: "row",
        margin:10
    },

    img: {
        borderWidth: 1,
        width: 90,
        height: 90,
        margin: 5,
        borderRadius: 5,
        backgroundColor: "lightgray",
        borderColor: "lightgray",
    },
    adress: {
        alignSelf: "center",
        color: "white"

    },
    bb: {
        borderWidth: 2,
        height: 25,
        marginTop: 45,
        width: 85,
        borderColor: "darkgrey",
        backgroundColor: "darkgrey",
        borderRadius: 5,
        alignSelf:'flex-start',
        

    },
    scroll:{
        // flex:1,
        width:'100%',
        // height:100,
        // backgroundColor:'red',
    },
    contentScroll:{
        height:200,
      
    },
    adress2:{
    fontSize:20,
    borderWidth:2,
    height:30,
       alignContent:"center",
       borderColor:"grey",
       backgroundColor:"grey",
       borderRadius:5,
    }
})





