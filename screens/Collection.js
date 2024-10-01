import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Collection = () => {
  const navigation = useNavigation();

  const [customerCollection, setCustomerCollection] = useState([
    { id: 1, name: 'John Doe', mobile: '1234567890', weight: '2.5Kg', date: '2024-09-22' }
  ]);

  const [driverCollection, setDriverCollection] = useState([
    { id: 1, name: 'Jane Smith', mobile: '0987654321', weight: '2.5Kg', date: '2024-09-22' }
  ]);

  const handleGetCollection = (id) => {
    navigation.navigate('CollectionConfirmation', { item: id });
  };

  const handleFinishCollection = (id) => {
    // Navigate to CollectionConfirmation.js
    navigation.navigate('CollectionConfirmation', { driverId: id });
  };

  const handleNavigateToLocation = (driverId) => {
    navigation.navigate('LocationTracker', { id: driverId });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Top Header */}
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.headerText}>Ashokan Kuganathan</Text>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.navTabs}>
          <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
            <Text style={styles.navTab}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Security')}>
            <Text style={styles.navTab}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UpdateCardScreen')}>
            <Text style={styles.navTab}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.navTab}>Transaction</Text>
          </TouchableOpacity>
        </View>

        {/* Collection from Customer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Collection from Customer</Text>
          {customerCollection.map((item) => (
            <View key={item.id} style={styles.collectionCard}>
              <Text style={styles.collectionText}>Used Plastics: {item.weight}</Text>
              <Text style={styles.collectionText}>Customer Name: {item.name}</Text>
              <Text style={styles.collectionText}>Mobile No: {item.mobile}</Text>
              <Text style={styles.collectionText}>Date: {item.date}</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleGetCollection(item.id)}>
                <Text style={styles.buttonText}>Get</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Collection from Driver */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Collection from Driver</Text>
          {driverCollection.map((item) => (
            <View key={item.id} style={styles.collectionCard}>
              <Text style={styles.collectionText}>Used Plastics: {item.weight}</Text>
              <Text style={styles.collectionText}>Driver Name: {item.name}</Text>
              <Text style={styles.collectionText}>Mobile No: {item.mobile}</Text>
              <Text style={styles.collectionText}>Date: {item.date}</Text>

              {/* Pin Icon for Location */}
              <TouchableOpacity onPress={() => handleNavigateToLocation(item.id)}>
                <Image source={require('../assets/pin.png')} style={styles.pinIcon} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => handleFinishCollection(item.id)}>
                <Text style={styles.buttonText}>Finish</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Add bottom padding */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('AdminProductsScreen')}>
          <Image source={require('../assets/home.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/calendar.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Collection')}>
          <Image source={require('../assets/cargo-truck-g.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/alarm.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
          <Image source={require('../assets/profile.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#027148',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
    marginRight: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#93E9BE',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  navTab: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  container: {
    paddingBottom: 100,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  collectionCard: {
    backgroundColor: '#e0f7e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  collectionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  pinIcon: {
    width: 30,
    height: 30,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Collection;
