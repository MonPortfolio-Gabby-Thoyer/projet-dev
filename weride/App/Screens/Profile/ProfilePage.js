import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { readData } from "../../CRUD";
import { auth } from "../../firebase";

const ProfilePage = ({ navigation }) => {
  const currentUser = auth.currentUser.uid;

  const [userData, setUserData] = useState({});
  const [tripUserData, setTripUserData] = useState({});
  const [tripUserkey, setTripUserKey] = useState({});

  const fetchUserData = async () => {
    const userData = await readData(`users/${currentUser}`);
    setUserData(userData);
  }

  const fetchTripData = async () => {
    const tripData = await readData(`trips/`);
    setTripUserKey(Object.keys(tripData).filter((key) => {
      return tripData[key].creator === currentUser;
    }));
    setTripUserData(Object.values(tripData).filter((entry) => {
      return entry.creator === currentUser;
    }));
  }

  const renderItem = ({ item }) => {
    const key = tripUserkey.filter(trip => trip.title === item.title);
    console.log(key);
    return (
      <View style={{padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.departure_date}</Text>
        </View>
        <Button title="Modify" style={{with: '15%'}} onPress={() => navigation.navigate("EditTrips", {variable})}/>
      </View>
    );
  };

  useEffect(() => {
    fetchUserData();
    fetchTripData();
  }, []);

  return (
    <View>
      <Text>First Name: {userData.firstname}</Text>
      <Text>Last Name: {userData.pseudo}</Text>
      <Text>Email: {userData.email}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
      {userData.bike ? (
        <>
          <Text>Model: {userData.bike.model}</Text>
          <Text>Brand: {userData.bike.brand}</Text>
        </>
      ) : null}

      <Button title="Modify Bike" onPress={() => navigation.navigate("Bikes")} />
      <FlatList style={{padding: 5}}
        data={tripUserData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProfilePage;