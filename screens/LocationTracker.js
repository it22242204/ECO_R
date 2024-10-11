import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Linking, ActivityIndicator, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const LocationTracker = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    setIsLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      setIsLoading(false);
      return;
    }
    getCurrentLocation();
  };

  const getCurrentLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
    } catch (error) {
      setErrorMsg('Unable to fetch location. Make sure GPS is enabled.');
    }
    setIsLoading(false);
  };

  const openMaps = () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation;
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url);
    } else {
      alert('Location not available');
    }
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  const goBackToCollection = () => {
    navigation.navigate('Collection'); // Navigate back to the Collection screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Coordinates</Text>
      <View style={styles.locationContainer}>
        {errorMsg ? <Text>{errorMsg}</Text> : null}
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text>Latitude: {currentLocation ? currentLocation.latitude : 'loading...'}</Text>
            <Text>Longitude: {currentLocation ? currentLocation.longitude : 'loading...'}</Text>
          </>
        )}
      </View>

      {errorMsg ? (
        <TouchableOpacity onPress={openSettings}>
          <Text style={styles.settingsLink}>Open Settings to Grant Permission</Text>
        </TouchableOpacity>
      ) : null}

      {currentLocation ? (
        <TouchableOpacity onPress={openMaps}>
          <View style={[styles.buttonContainer, styles.shadow]}>
            <Text style={styles.buttonText}>Open Maps</Text>
          </View>
        </TouchableOpacity>
      ) : (
        !isLoading && (
          <TouchableOpacity onPress={requestLocationPermission}>
            <View style={[styles.buttonContainer, styles.shadow]}>
              <Text style={styles.buttonText}>Get Location</Text>
            </View>
          </TouchableOpacity>
        )
      )}

      {/* Button to go back to Collection screen */}
      <TouchableOpacity onPress={goBackToCollection}>
        <View style={[styles.backbuttonContainer, styles.shadow]}>
          <Text style={styles.buttonText}>Back to Collection</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  settingsLink: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#28a745',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderRadius: 8,
  }, 
  backbuttonContainer: {
    backgroundColor: 'red',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default LocationTracker;
