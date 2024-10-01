import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const UpdateCardScreen = () => {
  const navigation = useNavigation();
  // Sample data for card details (replace this with your actual data)
  const [cards, setCards] = useState([
    {
      id: 1,
      cardHolder: 'Ashokan Kuganathan',
      cardNumber: '**** **** **** 1234',
      expiryDate: '09/2024',
      cardType: 'Visa', // Use "Visa" for Visa cards
    },
    {
      id: 2,
      cardHolder: 'John Doe',
      cardNumber: '**** **** **** 5678',
      expiryDate: '12/2023',
      cardType: 'MasterCard', // Use "MasterCard" for MasterCard cards
    },
  ]);

  const handleUpdateCard = (id) => {
    // Handle card update logic
    alert(`Updating card with ID: ${id}`);
    navigation.navigate('InsertCard');
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

        {/* Card Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Cards</Text>
          {cards.map((card) => (
            <View key={card.id} style={styles.cardDetail}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardText}>Card Holder: {card.cardHolder}</Text>
                
                {/* Conditionally render the card logo based on the card type */}
                {card.cardType === 'Visa' && (
                  <Image source={require('../assets/visa.png')} style={styles.cardLogo} />
                )}
                {card.cardType === 'MasterCard' && (
                  <Image source={require('../assets/master.png')} style={styles.cardLogo} />
                )}
              </View>
              <Text style={styles.cardText}>Card Number: {card.cardNumber}</Text>
              <Text style={styles.cardText}>Expiry Date: {card.expiryDate}</Text>
              <Text style={styles.cardText}>Card Type: {card.cardType}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleUpdateCard(card.id)}
              >
                <Text style={styles.buttonText}>Update</Text>
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
  pinicon: {
    width: 30,
    height: 30,
    marginRight: 10,
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
    paddingBottom: 100, // Ensure enough space at the bottom
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
  cardDetail: {
    backgroundColor: '#e0f7e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardLogo: {
    width: 50,
    height: 20,
    resizeMode: 'contain', // Make sure the logo fits well
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

export default UpdateCardScreen;
