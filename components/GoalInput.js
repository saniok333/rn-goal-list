import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const GoalInput = ({ onAddGoal }) => {
  const [newGoal, setNewGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setNewGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(newGoal);
    setNewGoal('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goal"
        onChangeText={goalInputHandler}
        value={newGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
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
});
