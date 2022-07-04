import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
});
