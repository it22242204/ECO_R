import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CollectionConfirmation = () => {
  const navigation = useNavigation();

  const handleConfirmation = (status) => {
    console.log('Confirmed:', status);
    // Navigate to the Collection screen after handling confirmation
    navigation.navigate('Collection');
  };

  return (
    <SafeAreaView style={styles.container}>
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

      {/* Confirmation Section */}
      <View style={styles.confirmationContainer}>
        <Text style={styles.title}>Finish Collection</Text>
        <Text style={styles.confirmationText}>Have you got the product from Dealer?</Text>

        {/* Yes / No Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'red' }]}
            onPress={() => handleConfirmation(false)}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'green' }]}
            onPress={() => handleConfirmation(true)}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>

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
    </SafeAreaView>
  );
};

export default CollectionConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
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
    flexGrow: 1,
  },
  navTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  navTab: {
    fontSize: 16,
    fontWeight: '500',
  },
  confirmationContainer: {
    padding: 20,
    alignItems: 'center',
    flex: 1, // To make sure content grows and leaves space at the bottom
    justifyContent: 'center', // Center the content vertically
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  confirmationText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 50, // Space added to prevent "kissing" the bottom navigation
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#00C853',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});
