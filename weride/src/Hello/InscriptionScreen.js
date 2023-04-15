import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import App from '../../App';

// const Stack = createStackNavigator();

const InscriptionScreen = () => {
    // return (
        // <NavigationContainer>
        //   <Stack.Navigator>
        //     <Stack.Screen name="Connexion" component={App} />
        //   </Stack.Navigator>
        // </NavigationContainer>
//         <View>
//           <Text>Sa marche</Text>
//         </View>
//       );
// }
return (
  <View style={styles.container}>
    <Text style={styles.title}>Inscription</Text>
    <TextInput
      style={styles.input}
      placeholder="NOM Prénom"
    />
    <TextInput
      style={styles.input}
      placeholder="Nom d'utilisation"
    />
    <TextInput
      style={styles.input}
      placeholder="Date de naissance"
    />
    <TextInput
      style={styles.input}
      placeholder="Adresse mail"
    />
    <TextInput
      style={styles.input}
      placeholder="Mot de passe"
      // value={password}
      // secureTextEntry={true}
      // onChangeText={handlePasswordChange}
    />
    <TouchableOpacity style={styles.button} onPress={() => console.log("OK")}>
      <Text style={styles.buttonText}>S'inscrire</Text>
    </TouchableOpacity>
    <View style={styles.bottomContainer}>
      <Text style={styles.bottomText}>Vous avez un compte ? </Text>
      <TouchableOpacity>
        <Text style={styles.bottomButtonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};

export default InscriptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingBottom: '10%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    // backgroundColor: '#007bff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    padding: 12,
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: '40%',
  },
  bottomText: {
    marginRight: 10,
    fontSize: '2.5vw',
  },

  bottomButtonText: {
    color: 'blue',
    fontSize: '2.5vw',
    fontWeight: 'bold',
  },
});