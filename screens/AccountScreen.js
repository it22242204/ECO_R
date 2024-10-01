import { StyleSheet, Text, SafeAreaView, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';


const DisplayAnImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/profile.png')}
      />
    </View>
  );
};

const AccountScreen = () => {

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate('AdminProductsScreen');
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

      <View style={styles.mainContainer}>
        <DisplayAnImage />
        <Text style={styles.emailText}>*******@gmail.com</Text>

        {/* Name Field */}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.errorText}>Name is required.</Text>}

        {/* Email Field */}
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.errorText}>
            {errors.email.type === 'pattern'
              ? 'Please enter a valid email address.'
              : 'Email is required.'}
          </Text>
        )}

        {/* Address Field */}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="address"
        />
        {errors.address && <Text style={styles.errorText}>Address is required.</Text>}

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
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

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure SafeAreaView occupies the full height
    backgroundColor: '#f5f5f5',
  },
  mainContainer: {
    flexGrow: 1, // Allow the main content to grow
    alignItems: 'center',
    justifyContent: 'flex-start', // Change to flex-start to avoid stretching
    margin: 30,
    padding: 10,
    paddingBottom: 100, // Increased padding at the bottom to prevent overlap
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20, // Adjust this value to move the image further down
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  emailText: {
    marginBottom: 30, // Gap between the email and the rest of the form
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#d8f3dc', // Light green color for input boxes
    padding: 10,
    marginBottom: 20,
    width: '70%',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#006400', // Dark green color for the button
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '70%',
    marginBottom: 20, // Add margin at the bottom of the button
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#93E9BE',
    position: 'absolute', // Position it at the bottom
    bottom: 0, // Align to the bottom of the screen
    left: 0, // Align to the left
    right: 0, // Align to the right
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
});
