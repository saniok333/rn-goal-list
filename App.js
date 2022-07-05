import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const onAddGoalHandler = (newGoal) => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: newGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
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
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={onAddGoalHandler}
          visible={modalIsVisible}
          stopAddGoal={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            alwaysBounceVertical={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
