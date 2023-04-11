import {StyleSheet, TextInput, View, Button} from 'react-native';

export default function GoalInput(){


    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      } 
    
      function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
          ...currentCourseGoals,
          { text: enteredGoalText, id: Math.random().toString() },
        ]);
      }
    
    return(
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    )
}

const styles = StyleSheet.create({
    
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