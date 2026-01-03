import LoginComponent from '@/components/loginComponent';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {

  const [name, setname] = useState('');
  const [form, setform] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setage] = useState('');
  const [PhoneNum, setPhoneNum] = useState('');

  const switchLogin =()=>{
    if (form=="login"){
      setform("sgin")
    }else{setform("login")}
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title2}>mashaweeeee!</Text>{/* make it half cercle */}
        <Text style={styles.title}>LogIn👤</Text>

        <LoginComponent
          email={email}
          setEmail={setEmail}
        />

       

      
        <TouchableOpacity style={styles.button} onPress={() => alert('تم الضغط!')}>
          <Text style={styles.buttonText}>inter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerText}>sgin?</TouchableOpacity>
        <Text style={styles.footerText3}>ANIMALS BATTLE</Text>
        <Text style={styles.footerText2}>🐏vs🐄</Text>
      </View>
    </SafeAreaView>
  );
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgray",
    justifyContent: 'center',
  },
  form: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: 'darkblue',
  },
  title2: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 25,
  },
  button: {
    backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
  footerText2: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 60,
  },
  footerText3: {
    marginTop: 10,
    textAlign: 'center',
    color: 'lightgray',
    fontSize: 30,
    fontWeight: 'bold',
  }
});