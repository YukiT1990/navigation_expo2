import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Switch, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {ImageBackground} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react';

function HomeScreen({ navigation }) {

  const [emailText, setEmailText] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.jpg')} resizeMode="cover" style={styles.image} >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.safeView}>
              <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Welcome to Social 👋</Text>
              </View>

              <View style={styles.bodyTextContainer}>
                <Text style={styles.bodyText}>
                  At social we believe in a new type of interaction.
                  {"\n"}{"\n"}
                  One that crosses the boundaries of what was possible before.
                  {"\n"}{"\n"}
                  Sign up today and check out the future of social networking.
                </Text>
              </View>

              <View style={styles.signUpContainer}>
                <TextInput
                  style={styles.emailInput}
                  placeholder="Your email address"
                  onChangeText={emailText => setEmailText(emailText)}
                  defaultValue={emailText}
                />
                <View style={styles.newsletterContainer}>
                  <View>
                    <Switch ios_backgroundColor="#3e3e3e"></Switch>
                  </View>
                  <View style={styles.newsletterGrow}>
                    <Text style={styles.newsletterText}>Sign up to our newsletter to hear the latest news before anyone else</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.signUp}
                  onPress={() => {
                    navigation.navigate("Sign up", {
                    email: emailText
                    });
                  }}
                >
                  <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

function SignUpScreen({ route, navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.email}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeView:{
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  welcomeTextContainer: {
    flex: 1, 
    justifyContent: 'flex-end',
    paddingLeft:"10%",
    paddingRight:"10%"
  },
  bodyTextContainer: {
    paddingTop:20,
    paddingBottom: "20%",
    paddingLeft:"10%",
    paddingRight:"10%"
  },
  signUpContainer: {
    paddingTop: "10%",
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontSize: 55,
    fontWeight:"bold"
  },
  bodyText: {
    fontSize: 17
  },
  signUp: {
    width: "90%",
    height: 70,
    borderRadius: 35,
    marginLeft:"5%",
    marginBottom: 10,
    backgroundColor: "black",
    alignContent:"center",
    justifyContent:"center"
  },
  signUpText: {
    textAlign:"center",
    color:"white",
    fontWeight:"bold",
    fontSize:28
  },
  emailInput: {
    borderWidth:3,
    borderRadius:17,
    borderColor:"black",
    width:"90%",
    height: 60,
    marginLeft:"5%",
    marginRight:"5%",
    marginBottom: 20,
    paddingLeft:"10%",
    paddingRight:"10%",
    textAlign:"center",
    fontSize: 18,
    backgroundColor:"white"
  },
  newsletterContainer: {
    flexDirection: 'row', 
    width:"90%", 
    paddingLeft:"5%", 
    paddingBottom:"5%"
  },
  newsletterGrow: {
    flexGrow: 1,
    flex: 1 //{This is a bug fix}
  },
  newsletterText: {
    paddingLeft:15
  },
});
