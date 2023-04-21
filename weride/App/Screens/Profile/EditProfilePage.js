import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { updateData, readData } from "../../ExternalFunction/CRUD";
import { auth } from "../../firebase";
import { updateEmail, updatePassword } from "firebase/auth";

const EditProfilePage = ({ navigation }) => {
  const currentUser = auth.currentUser;

  const [new_firstname, setFirstName] = useState("");
  const [new_pseudo, setPseudo] = useState("");
  const [new_email, setEmail] = useState("");
  const [new_phone_number, setPhoneNumber] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPass, setNewPass] = useState("")

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const currentUserData = await readData(`users/${currentUser.uid}`);
    setFirstName(currentUserData.firstname)
    setPseudo(currentUserData.pseudo)
    setEmail(currentUserData.email)
    setPhoneNumber(currentUserData.phone_number)
  }

  const reAuthenticateForPass = async () => {
    try {
      await auth.signInWithEmailAndPassword(new_email, currentPassword);
      console.log("auth success before modifying")
      updatePassword(currentUser, newPass).then(() => {
        alert("Password Updated !")
        navigation.navigate("Login")
      }).catch((error) => {
        alert(error)
      });
    } catch (error) {
      alert("Wrong current Password or email")
      return false
    }

  }

  const changeEmail = () => {
    updateEmail(currentUser, new_email).then(() => {
      alert("Email Updated !")
      navigation.navigate("Login")
    }).catch((error) => {
      alert(error)
    });
  }

  const updateProfile = async () => {
    if (new_email != currentUser.email) {
      changeEmail()
    }
    if (newPass) {
      reAuthenticateForPass()
    }

    const updatedData = {
      firstname: new_firstname,
      pseudo: new_pseudo,
      email: new_email,
      phone_number: new_phone_number
    };

    await updateData(`users/${currentUser.uid}`, updatedData);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Prénom:</Text>
      <TextInput value={new_firstname} onChangeText={setFirstName} />

      <Text>Pseudo:</Text>
      <TextInput value={new_pseudo} onChangeText={setPseudo} />

      <Text>Email:</Text>
      <TextInput value={new_email} onChangeText={setEmail} />

      <Text>Téléphone:</Text>
      <TextInput value={new_phone_number} onChangeText={setPhoneNumber} />

      <Text>Mot de passe actuel:</Text>
      <TextInput value={currentPassword} onChangeText={setCurrentPassword} secureTextEntry />

      <Text>Nouveau mot de passe:</Text>
      <TextInput value={newPass} onChangeText={setNewPass} secureTextEntry />

      <Button title="Save Changes" onPress={updateProfile} />
    </View>
  );
};

export default EditProfilePage;