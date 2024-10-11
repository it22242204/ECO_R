import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getAuth, signOut } from "@firebase/auth";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const AdminProductsScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const [products, setProducts] = useState([]);

  // Fallback images grouped into two categories
  const group1Images = [
    require("../assets/recycled-plastics.jpg"),
    require("../assets/Plastic-pellets.jpg"),
    require("../assets/waste.jpg"),

  ];

  const group2Images = [
    require("../assets/Waste_plastics.png"),
    require("../assets/used-plastics.jpg"),
    require("../assets/waste 1.jpeg"),
    require("../assets/new_plastics.jpg"),
    require("../assets/plastic-bottles-waste.jpg"),
    require("../assets/plastic-recycling.jpg"),
  ];

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      navigation.navigate("Signin_Signup");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  // Fetch products from Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Products"));
      const fetchedProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  // Fetch products initially and whenever the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );

  // Delete product from Firestore
  const handleDeleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, "Products", productId));
      console.log(`Product with ID ${productId} deleted`);
      // Remove the deleted product from the local state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  // Handle image error by setting a fallback image for the specific product
  const handleImageError = (productId, productName) => {
    // Determine which group of fallback images to use
    const fallbackImages =
      productName.toLowerCase().startsWith("recycled") ? group1Images : group2Images;

    const randomFallbackImage =
      fallbackImages[Math.floor(Math.random() * fallbackImages.length)];

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && !product.imageUriFallback // If the product's imageUri fails and hasn't been updated before
          ? {
              ...product,
              imageUri: Image.resolveAssetSource(randomFallbackImage).uri,
              imageUriFallback: true, // Mark it as already updated with a fallback
            }
          : product
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.headerText}>Ashokan Kuganathan</Text>
        <TouchableOpacity style={styles.LogoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
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

      {/* Add Product Button */}
      <View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            navigation.navigate("NewProduct");
          }}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Products List */}
      <ScrollView style={styles.productsList}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image
              source={{ uri: product.imageUri }}
              style={styles.productImage}
              onError={() => handleImageError(product.id, product.product)}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{product.product}</Text>
              <Text style={styles.productPrice}>{product.unitPrice}</Text>
              <Text style={styles.productQuantity}>{product.requirement}</Text>
            </View>
            <View style={styles.productActions}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  Alert.alert(
                    "Confirm Delete",
                    "Are you sure you want to delete this product?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Delete canceled"),
                        style: "cancel",
                      },
                      {
                        text: "Delete",
                        onPress: () => handleDeleteProduct(product.id),
                        style: "destructive",
                      },
                    ],
                    { cancelable: false }
                  );
                }}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  navigation.navigate("NewProduct", {
                    productId: product.id,
                    productDetails: product,
                  });
                }}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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

export default AdminProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#027148",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "right",
    marginRight: 10,
  },
  navTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#e0e0e0",
  },
  navTab: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  productsList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  productInfo: {
    marginTop: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
  productQuantity: {
    fontSize: 14,
    color: "#888",
  },
  productActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginRight: 5,
  },
  LogoutButton: {
    backgroundColor: "#FF6347",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 55,
  },
  addButton: {
    backgroundColor: "#027148",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    margin: 10,
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#027148",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#93E9BE",
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});
