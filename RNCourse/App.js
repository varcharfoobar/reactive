import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


// Default Function
export default function App() {

  return (
    
    // Views are made to generally build containers and boxes
    // Similar to Swift, it's like our main view, but the content needs to be placed into an element
    // If you want to display text, you will need to use the "Text" component
    // We can also nest our views

    <View style={styles.container}>
      <Text>Hello World! React Native Time! 😎</Text>
      <Text>Here is another text</Text>
      <Button title='Tap me!'/>
      <StatusBar style="auto" />
    </View>
  );
}


// Our styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
