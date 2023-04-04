import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      
      <View style={styles.goalsContainer}>
      <ScrollView alwaysBounceVertical={false}>
        <View>
        {courseGoals.map((goal)=> 
            <View key={goal} style={styles.goalItem}>
                 <Text style={styles.goalText}>{goal}</Text>
            </View>
        )}
        </View>
        </ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem:{
    color: '#fff',
    backgroundColor:'#5e0acc',
    padding: 12,
    margin:8,
    borderRadius:6,

  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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
  goalText: {
    color: 'white',
    
  },
});