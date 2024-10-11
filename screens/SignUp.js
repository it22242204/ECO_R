import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>Hi, Welcome Back</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Create your account</Text>

      {/* Form Fields */}
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Mobile No" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Address" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm password" placeholderTextColor="#ccc" secureTextEntry={true} />

      {/* Terms and Policy Checkbox */}
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxText}>I understood the </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>terms & policy</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Link to Sign In */}
      <View style={styles.signUpLinkContainer}>
        <Text style={styles.signUpText}>Have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}> SIGN IN</Text>
        </TouchableOpacity>
      </View>

     {/* Bottom Navigation */}
     <View style={styles.bottomNavigation}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AdminProductsScreen")}
        >
          <Image
            source={require("../assets/home.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/calendar.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Collection")}>
          <Image
            source={require("../assets/cargo-truck-g.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/alarm.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 10,
    padding: 10, // Reduced padding for smaller height
    marginVertical: 5, // Reduced vertical margin for closer spacing
    borderRadius: 5,
    borderRadius: 5,
    width: '85%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#00C853',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00C853',
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 14,
    color: '#555',
  },
  signUpLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00C853',
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