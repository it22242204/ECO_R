import { StyleSheet, Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Payments = () => {
  const navigation = useNavigation();

  // Sample data for payments to customers and drivers
  const [paymentsToCustomers, setPaymentsToCustomers] = useState([
    {
      id: 1,
      company: 'Company A',
      customerName: 'John Doe',
      date: '09/28/2024',
      amount: 'Rs 500.00',
    },
    {
      id: 2,
      company: 'Company B',
      customerName: 'Jane Smith',
      date: '09/29/2024',
      amount: 'Rs 400.00',
    },
  ]);

  const [paymentsToDrivers, setPaymentsToDrivers] = useState([
    {
      id: 1,
      company: 'Driver X',
      driverName: 'Alex Johnson',
      date: '09/28/2024',
      amount: 'Rs 700.00',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>Ashokan Kuganathan</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
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

        {/* Payments to Customer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment to Customer</Text>
          {paymentsToCustomers.map((payment) => (
            <View key={payment.id} style={styles.paymentCard}>
              <Text style={styles.paymentText}>Company: {payment.company}</Text>
              <Text style={styles.paymentText}>Customer Name: {payment.customerName}</Text>
              <Text style={styles.paymentText}>Date: {payment.date}</Text>
              <Text style={styles.paymentAmount}>{payment.amount}</Text>
            </View>
          ))}
        </View>

        {/* Payments to Driver */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment to Driver</Text>
          {paymentsToDrivers.map((payment) => (
            <View key={payment.id} style={styles.paymentCard}>
              <Text style={styles.paymentText}>Company: {payment.company}</Text>
              <Text style={styles.paymentText}>Driver Name: {payment.driverName}</Text>
              <Text style={styles.paymentText}>Date: {payment.date}</Text>
              <Text style={styles.paymentAmount}>{payment.amount}</Text>
            </View>
          ))}
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
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
  scrollContent: {
    flexGrow: 1, // Allows ScrollView to grow
    paddingBottom: 100, // Ensure enough space at the bottom for the bottom nav
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
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
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
  paymentCard: {
    backgroundColor: '#e0f7e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  paymentText: {
    fontSize: 16,
    marginBottom: 5,
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
});

export default Payments;
