import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Alert,
  Text,
} from 'react-native';

const App = () => {
  const showWelcomeMessage = () => {
    Alert.alert('Bem-vindo!', 'Obrigado por usar nosso aplicativo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo ao nosso aplicativo!</Text>
      </View>
      <View style={styles.content}>
        <Button
          title="Clique aqui"
          onPress={showWelcomeMessage}
          color="#841584"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2022 Nossa Empresa</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    textAlign: 'center',
    color: '#888',
  },
});

export default App;
