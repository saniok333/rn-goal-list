import { StyleSheet, View, Text, Pressable } from 'react-native';

export const GoalItem = ({ text, id, onDeleteGoal }) => {
  return (
    <Pressable onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{text}</Text>
      </View>
    </Pressable>
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
});
