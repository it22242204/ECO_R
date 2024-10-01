import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const NewProduct = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [requirement, setRequirement] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({ product, unitPrice, requirement });
    
    // Navigate to ProductScreen after submission
    navigation.navigate('AdminProductsScreen');
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        {/* Top Header */}
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.headerText}>Ashokan Kuganathan</Text>
        </View>

        {/* Navigation Tabs */}
      <View style={styles.navTabs}>
        <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
          <Text style={styles.navTab}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Security")}>
          <Text style={styles.navTab}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("UpdateCardScreen")}
        >
          <Text style={styles.navTab}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
          <Text style={styles.navTab}>Transaction</Text>
        </TouchableOpacity>
      </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Product"
            value={product}
            onChangeText={setProduct}
          />
          <TextInput
            style={styles.input}
            placeholder="Unit Price"
            value={unitPrice}
            onChangeText={setUnitPrice}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Requirement"
            value={requirement}
            onChangeText={setRequirement}
          />

          {/* Cover Image Section */}
          <View style={styles.imageUpload}>
            <Image source={require('../assets/upload.png')} style={styles.imageIcon} />
            <Text style={styles.uploadText}>Drop your image here, or browse</Text>
            <Text style={styles.uploadText}>Support: JPG, PNG, JPEG</Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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

export default NewProduct;

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
    textAlign: 'right',
    marginRight: 10,
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
  formContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  imageUpload: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#eef',
    marginBottom: 20,
  },
  imageIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 12,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#027148',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#00C853',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});
