import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

import { GoalItem } from './components/GoalItem';

import { GoalInput } from './components/GoalInput';

const App = () => {
  const [goalList, setGoalList] = useState([]);

  const onAddGoalHandler = (newGoal) => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: newGoal, id: Math.random().toString() },
    ]);
  };

  const onDeleteGoalHandler = (id) => {
    setGoalList((currentGoalList) =>
      currentGoalList.filter((goal) => goal.id !== id)
    );
  };

  const renderItem = ({ item }) => (
    <GoalItem
      text={item.text}
      id={item.id}
      onDeleteGoal={onDeleteGoalHandler}
    />
  );

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={onAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          alwaysBounceVertical={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
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

  goalsContainer: {
    flex: 5,
  },
});
