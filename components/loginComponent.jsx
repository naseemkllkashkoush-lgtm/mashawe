import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const LoginComponent = ({ email, setEmail, password, setPassword }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder=" Email.. "
                placeholderTextColor={'white'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />


            <TextInput
                style={styles.input}
                placeholder=" password.. "
                placeholderTextColor={'white'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true} // لإخفاء الحروف أثناء الكتابة
            />
        </View>
    )
}

export default LoginComponent

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 25,
    },
    inputContainer: {

    }

})