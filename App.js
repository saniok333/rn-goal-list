import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30 }}>
        Open up App.js to start working on your app!!
      </Text>
      <Button title="Tap me" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
