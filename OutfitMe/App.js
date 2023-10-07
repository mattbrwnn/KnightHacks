import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chatbot from './components/message'; // Import your Chatbot component


export default function App() {
  return (
    <View style={styles.container}>
      {/* Replace the existing content with your Chatbot component */}
      <Chatbot />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
