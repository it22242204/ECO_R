import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Modal, TouchableOpacity, Animated } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { firebaseConfig } from '../firebaseConfig';

const app = initializeApp(firebaseConfig);

const ErrorModal = ({ visible, message, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Authentication Error</Text>
          <Text style={styles.modalMessage}>{message}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.name}>ECO-R</Text>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
};

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
    </View>
  );
};

const Signin_Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigation.navigate('AdminProductsScreen');
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        await signOut(auth);
        console.log('User logged out successfully!');
        setUser(null);
      } else {
        if (isLogin) {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
          setUser(userCredential.user);
        } else {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
          setUser(userCredential.user);
        }
        navigation.navigate('AdminProductsScreen');
      }
    } catch (error) {
      setErrorMessage("Hey! Wrong email or password");
      setModalVisible(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
      ) : (
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
      <ErrorModal visible={modalVisible} message={errorMessage} onClose={() => setModalVisible(false)} />
    </ScrollView>
  );
};

export default Signin_Signup;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#d5ffd7',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
    alignSelf: 'center',
  },
  name: {
    fontSize: 40,
    color: '#4CAF50',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#f5ffef',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  toggleText: {
    color: '#027148',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#e74c3c',
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
