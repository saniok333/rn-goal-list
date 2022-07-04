import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>3</Text>
      </View>
      {/* <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  // appContainer: {
  //   padding: 50,
  // },
  // inputContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: '#cccccc',
  //   width: '80%',
  //   marginRight: 8,
  //   padding: 8,
  // },
});
