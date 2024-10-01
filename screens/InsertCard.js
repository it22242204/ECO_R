import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const InsertCard = () => {
  const navigation = useNavigation();
  const [cardHolderName, setCardHolderName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleUpdate = () => {
    // Add logic for updating card details
    console.log('Card Details Updated:', {
      cardHolderName,
      newPassword,
      expiryMonth,
      expiryYear,
      cvv,
    });
    navigation.navigate('UpdateCardScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>Insert Card Information</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Form Fields */}
        <Text style={styles.label}>Card Holder Name</Text>
        <TextInput
          style={styles.input}
          placeholder="ex: jon smith"
          value={cardHolderName}
          onChangeText={(text) => setCardHolderName(text)}
          placeholderTextColor="#ccc"
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="ex: YourPassword123"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          placeholderTextColor="#ccc"
        />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Expiry Month</Text>
            <TextInput
              style={styles.input}
              placeholder="12"
              value={expiryMonth}
              keyboardType="numeric"
              onChangeText={(text) => setExpiryMonth(text)}
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Expiry Year</Text>
            <TextInput
              style={styles.input}
              placeholder="2028"
              value={expiryYear}
              keyboardType="numeric"
              onChangeText={(text) => setExpiryYear(text)}
              placeholderTextColor="#ccc"
            />
          </View>
        </View>

        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="***"
          secureTextEntry={true}
          value={cvv}
          keyboardType="numeric"
          onChangeText={(text) => setCvv(text)}
          placeholderTextColor="#ccc"
        />

        {/* Update Button */}
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default InsertCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  scrollContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#027148',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
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
