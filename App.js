import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  const [newGoal, setNewGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setNewGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoalList) => [...currentGoalList, newGoal]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goalList.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalItemText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
  },
});
